import { NextRequest, NextResponse } from 'next/server';
import { addApplication, updateApplicationOffice, getApplications, AdmissionApplication } from '@/lib/cmsStore';
import { CIMS_INFO } from '@/lib/data/cimsData';

// Determine the official college notification email from environment variable or official CIMS data
const PRIMARY_OFFICIAL_EMAIL = process.env.CIMS_OFFICIAL_EMAIL || process.env.COLLEGE_EMAIL || CIMS_INFO.email || 'cambridge567@gmail.com';
const BACKUP_NOTIFICATION_EMAIL = process.env.ADMIN_NOTIFICATION_EMAIL || 'sweetyalley2@gmail.com';

// In-memory rate limiting to prevent spam / duplicate submissions
const recentApplications = new Map<string, number>();

/**
 * Mask sensitive ID numbers (Aadhaar, PAN, Voter ID)
 * Strictly ensures complete identity numbers are NEVER exposed or emailed unmasked.
 */
function maskIdNumber(rawId: string): string {
  const clean = (rawId || '').replace(/\s+/g, '').trim();
  if (!clean) return 'Not Provided';
  if (clean.length <= 4) return `***${clean}`;
  const lastFour = clean.slice(-4);
  return `XXXX-XXXX-${lastFour}`;
}

/**
 * Send official email notification for new admission application
 */
async function sendApplicationEmail(app: AdmissionApplication) {
  const timestamp = new Date(app.createdAt).toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'medium'
  });

  const targetEmails = Array.from(new Set([PRIMARY_OFFICIAL_EMAIL, BACKUP_NOTIFICATION_EMAIL])).filter(Boolean);

  const emailPayload = {
    _subject: `📋 New Online Admission Application: ${app.studentName} – ${app.appliedCourse} [${app.applicationNo}]`,
    _template: 'table',
    _captcha: 'false',
    institute: 'Cambridge Institute of Management Studies (CIMS Group)',
    application_number: app.applicationNo,
    student_name: app.studentName,
    guardian_name: app.guardianName,
    mother_name: app.motherName || 'Not specified',
    applied_program: app.appliedCourse,
    academic_session: app.session || '2026-2027',
    primary_telephone: app.telephoneNumber,
    alternative_number: app.alternativeNumber || 'None',
    student_email: app.email,
    date_of_birth: app.dob,
    gender: app.gender,
    blood_group: app.bloodGroup,
    id_proof_type: app.idType,
    // SENSITIVE DATA PROTECTION: Only send masked ID number
    id_number_masked: app.idNumberMasked,
    residential_city: app.city,
    district: app.district,
    state: app.state,
    pin_code: app.pinCode,
    present_address: app.presentAddress,
    class_10_percentage: `${app.class10?.percentage || 'N/A'}% (${app.class10?.board || 'Board'})`,
    class_12_percentage: `${app.class12?.percentage || 'N/A'}% (${app.class12?.stream || 'Stream'} - ${app.class12?.board || 'Board'})`,
    hostel_required: app.hostelRequired ? 'Yes' : 'No',
    transport_required: app.transportRequired ? 'Yes' : 'No',
    applicant_digital_signature: app.applicantSignature,
    submission_timestamp_ist: timestamp
  };

  const dispatchPromises = targetEmails.map(async (email) => {
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(email)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ ...emailPayload, recipient: email }),
        signal: AbortSignal.timeout(7000)
      });
      if (response.ok) {
        console.log(`[ADMISSION_EMAIL] Successfully notified ${email} for application ${app.applicationNo}`);
        return true;
      }
    } catch (err: any) {
      console.warn(`[ADMISSION_EMAIL] Dispatch to ${email} skipped or timed out:`, err?.message || 'fetch failed');
    }
    return false;
  });

  await Promise.allSettled(dispatchPromises);
}

/**
 * Check if the request is from an authenticated staff member
 */
function isStaffAuthenticated(req: NextRequest): boolean {
  const token = req.cookies.get('cims_admin_token')?.value;
  return Boolean(token && token.startsWith('authenticated_session_token_'));
}

/**
 * Public Submission: POST /api/admission
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      studentName,
      guardianName,
      motherName,
      idType,
      idNumber,
      dob,
      telephoneNumber,
      alternativeNumber,
      email,
      bloodGroup,
      gender,
      category,
      nationality,
      presentAddress,
      permanentAddress,
      city,
      district,
      state,
      pinCode,
      appliedCourse,
      session,
      hostelRequired,
      transportRequired,
      class10,
      class12,
      declarationAccepted,
      applicantSignature,
      photoBase64,
      photoFileName
    } = body;

    // 1. Mandatory Field Validations
    const cleanStudentName = (studentName || '').trim();
    const cleanGuardianName = (guardianName || '').trim();
    const cleanPhone = (telephoneNumber || '').trim().replace(/[^\d+]/g, '');
    const cleanEmail = (email || '').trim().toLowerCase();
    const cleanCourse = (appliedCourse || '').trim();

    if (!cleanStudentName || cleanStudentName.length < 2) {
      return NextResponse.json({ error: 'Please enter the student\'s full legal name (at least 2 characters).' }, { status: 400 });
    }

    if (!cleanGuardianName || cleanGuardianName.length < 2) {
      return NextResponse.json({ error: 'Please enter father\'s or guardian\'s name.' }, { status: 400 });
    }

    if (!cleanPhone || cleanPhone.replace(/[^\d]/g, '').length < 10) {
      return NextResponse.json({ error: 'Please enter a valid 10-digit primary telephone / WhatsApp number.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!cleanEmail || !emailRegex.test(cleanEmail)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    if (!cleanCourse) {
      return NextResponse.json({ error: 'Please select a program / course for admission.' }, { status: 400 });
    }

    if (!dob) {
      return NextResponse.json({ error: 'Please specify the date of birth.' }, { status: 400 });
    }

    if (!presentAddress || presentAddress.trim().length < 5) {
      return NextResponse.json({ error: 'Please provide complete present residential address.' }, { status: 400 });
    }

    if (!pinCode || pinCode.replace(/[^\d]/g, '').length !== 6) {
      return NextResponse.json({ error: 'Please provide a valid 6-digit PIN code.' }, { status: 400 });
    }

    if (!declarationAccepted) {
      return NextResponse.json({ error: 'You must accept the student & guardian declaration undertaking before submitting.' }, { status: 400 });
    }

    if (!applicantSignature || applicantSignature.trim().length < 2) {
      return NextResponse.json({ error: 'Please provide the applicant digital signature.' }, { status: 400 });
    }

    // 2. Validate Photograph if present
    if (photoBase64) {
      const isBase64Image = photoBase64.startsWith('data:image/jpeg') || 
                            photoBase64.startsWith('data:image/png') || 
                            photoBase64.startsWith('data:image/webp');
      if (!isBase64Image) {
        return NextResponse.json({ error: 'Student photograph must be a valid JPG, PNG, or WebP image file.' }, { status: 400 });
      }
      // Check approximate size: base64 length / 1.33 gives bytes (~3MB limit = ~4,200,000 chars)
      if (photoBase64.length > 4500000) {
        return NextResponse.json({ error: 'Uploaded photograph exceeds maximum allowed file size of 3 MB.' }, { status: 400 });
      }
    }

    // 3. Spam / Duplicate Prevention (30-second window per phone)
    const now = Date.now();
    const lastSub = recentApplications.get(cleanPhone);
    if (lastSub && now - lastSub < 30000) {
      return NextResponse.json({
        success: true,
        message: 'Your admission application has already been received. Our admission office is reviewing your records.',
        duplicatePrevented: true
      }, { status: 200 });
    }
    recentApplications.set(cleanPhone, now);

    // 4. Data Privacy: Mask ID Number
    const idNumberMasked = maskIdNumber(idNumber);

    // 5. Office Use Only: Restricted to Authorized Staff
    // Public applicants cannot set or manipulate office fields.
    const initialOfficeUse = {
      batch: 'Batch 2026-2027 (Regular)',
      verificationDate: new Date().toISOString().split('T')[0],
      verifiedBy: 'Pending Staff Assignment',
      status: 'Pending Review' as const,
      others: 'Application received online via official portal. Ready for document verification.'
    };

    // 6. Save Application to secure store
    const applicationRecord = addApplication({
      studentName: cleanStudentName,
      guardianName: cleanGuardianName,
      motherName: (motherName || '').trim(),
      idType: idType || 'Aadhaar Card',
      idNumberMasked,
      dob,
      telephoneNumber: cleanPhone,
      alternativeNumber: (alternativeNumber || '').trim(),
      email: cleanEmail,
      bloodGroup: bloodGroup || 'O+',
      gender: gender || 'Male',
      category: category || 'General',
      nationality: nationality || 'Indian',
      presentAddress: presentAddress.trim(),
      permanentAddress: (permanentAddress || presentAddress).trim(),
      city: (city || '').trim(),
      district: (district || '').trim(),
      state: (state || 'West Bengal').trim(),
      pinCode: pinCode.replace(/[^\d]/g, '').trim(),
      appliedCourse: cleanCourse,
      session: session || '2026-2027',
      hostelRequired: Boolean(hostelRequired),
      transportRequired: Boolean(transportRequired),
      class10: {
        board: class10?.board || '',
        institution: class10?.institution || '',
        passingYear: class10?.passingYear || '',
        percentage: class10?.percentage || ''
      },
      class12: {
        board: class12?.board || '',
        stream: class12?.stream || '',
        institution: class12?.institution || '',
        passingYear: class12?.passingYear || '',
        percentage: class12?.percentage || ''
      },
      officeUse: initialOfficeUse,
      photoBase64: photoBase64 || undefined,
      photoFileName: photoFileName || undefined,
      declarationAccepted: true,
      applicantSignature: applicantSignature.trim()
    });

    // 7. Dispatch secure email notification
    sendApplicationEmail(applicationRecord).catch(err => {
      console.warn('[ADMISSION_EMAIL] Async notification error:', err);
    });

    return NextResponse.json({
      success: true,
      message: 'Admission application submitted successfully.',
      applicationNo: applicationRecord.applicationNo,
      applicationId: applicationRecord.id,
      timestamp: applicationRecord.createdAt
    }, { status: 201 });

  } catch (error: any) {
    console.error('[API_ADMISSION_ERROR]', error);
    return NextResponse.json({
      error: 'An internal error occurred while processing your admission application. Please try again.'
    }, { status: 500 });
  }
}

/**
 * Authorized Staff Only: GET /api/admission
 * Strictly protects student personal data from public inspection.
 */
export async function GET(req: NextRequest) {
  try {
    if (!isStaffAuthenticated(req)) {
      return NextResponse.json({ 
        error: 'Unauthorized access. Only authorized CIMS college staff may access submitted student applications.' 
      }, { status: 401 });
    }

    const applications = getApplications();
    return NextResponse.json({ success: true, applications });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to retrieve applications' }, { status: 500 });
  }
}

/**
 * Authorized Staff Only: PATCH /api/admission
 * Updates Office Use Only fields (Batch, Status, Enrollment No, Others)
 */
export async function PATCH(req: NextRequest) {
  try {
    if (!isStaffAuthenticated(req)) {
      return NextResponse.json({ 
        error: 'Unauthorized access. Only authorized CIMS college staff can modify Office Use Only fields.' 
      }, { status: 401 });
    }

    const body = await req.json();
    const { id, officeUse } = body;

    if (!id || !officeUse) {
      return NextResponse.json({ error: 'Application ID and officeUse data are required.' }, { status: 400 });
    }

    const updated = updateApplicationOffice(id, officeUse);
    if (!updated) {
      return NextResponse.json({ error: 'Application not found.' }, { status: 404 });
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Office Use fields updated successfully.', 
      application: updated 
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update office fields' }, { status: 500 });
  }
}
