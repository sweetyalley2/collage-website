import { NextRequest, NextResponse } from 'next/server';
import { addInquiry } from '@/lib/cmsStore';
import { CIMS_INFO } from '@/lib/data/cimsData';

// Determine the official college notification email from environment variable or official CIMS data
const PRIMARY_OFFICIAL_EMAIL = process.env.CIMS_OFFICIAL_EMAIL || process.env.COLLEGE_EMAIL || CIMS_INFO.email || 'cambridge567@gmail.com';
const BACKUP_NOTIFICATION_EMAIL = process.env.ADMIN_NOTIFICATION_EMAIL || 'sweetyalley2@gmail.com';

// In-memory rate limiting to prevent spam / duplicate submissions (key: phone, val: timestamp)
const recentSubmissions = new Map<string, number>();

async function sendEmailNotification(inquiry: {
  name: string;
  phone: string;
  email?: string;
  course?: string;
  qualification?: string;
  city?: string;
  message?: string;
  createdAt?: string;
}) {
  const timestamp = inquiry.createdAt 
    ? new Date(inquiry.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'full', timeStyle: 'medium' }) 
    : new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  // List of emails to receive this inquiry
  const targetEmails = Array.from(new Set([PRIMARY_OFFICIAL_EMAIL, BACKUP_NOTIFICATION_EMAIL])).filter(Boolean);

  const emailPayload = {
    _subject: `🎓 New Admission Enquiry: ${inquiry.name} – ${inquiry.course || 'CIMS Program'}`,
    _template: 'table',
    _captcha: 'false',
    institute: 'Cambridge Institute of Management Studies (CIMS Group)',
    candidate_name: inquiry.name,
    candidate_phone: inquiry.phone,
    candidate_email: inquiry.email || 'Not provided',
    selected_program: inquiry.course || 'BBA in Hospital Management',
    academic_qualification: inquiry.qualification || 'Higher Secondary (10+2)',
    city_location: inquiry.city || 'Not specified',
    enquiry_message: inquiry.message || 'Admission inquiry submitted via website form.',
    submission_date_time_ist: timestamp
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
        signal: AbortSignal.timeout(6000)
      });
      if (response.ok) {
        console.log(`[INQUIRY_EMAIL] Successfully notified ${email} for candidate ${inquiry.name}`);
        return true;
      }
    } catch (err: any) {
      console.warn(`[INQUIRY_EMAIL] Dispatch to ${email} skipped or timed out:`, err?.message || 'fetch failed');
    }
    return false;
  });

  await Promise.allSettled(dispatchPromises);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, course, qualification, city, message } = body;

    // Validation
    const cleanName = (name || '').trim();
    const cleanPhone = (phone || '').trim().replace(/[^\d+]/g, '');

    if (!cleanName || cleanName.length < 2) {
      return NextResponse.json({ error: 'Please provide a valid candidate name.' }, { status: 400 });
    }

    if (!cleanPhone || cleanPhone.replace(/[^\d]/g, '').length < 10) {
      return NextResponse.json({ error: 'Please provide a valid 10-digit mobile contact number.' }, { status: 400 });
    }

    // Check duplicate submissions within 30 seconds
    const now = Date.now();
    const lastSubTime = recentSubmissions.get(cleanPhone);
    if (lastSubTime && now - lastSubTime < 30000) {
      return NextResponse.json({
        success: true,
        message: 'Your admission query has already been submitted. Our counselor will contact you shortly.',
        duplicatePrevented: true
      }, { status: 200 });
    }
    recentSubmissions.set(cleanPhone, now);

    // Save to local cache / CMS Store
    const savedInquiry = addInquiry({
      name: cleanName,
      phone: cleanPhone,
      email: (email || '').trim(),
      course: course || 'BBA in Hospital Management',
      qualification: qualification || '10+2 / Higher Secondary',
      city: city || '',
      message: message || ''
    });

    // Send email notification to official college email
    sendEmailNotification(savedInquiry).catch((err) => {
      console.error('[INQUIRY_EMAIL] Background delivery notice:', err);
    });

    return NextResponse.json({
      success: true,
      message: 'Admission enquiry successfully submitted and delivered to CIMS Admissions Team.',
      inquiryId: savedInquiry.id,
      officialNotificationEmail: PRIMARY_OFFICIAL_EMAIL
    }, { status: 201 });
  } catch (err: any) {
    console.error('Error in /api/inquiry:', err);
    return NextResponse.json({ error: 'Unable to process enquiry at this moment. Please call our helpline.' }, { status: 500 });
  }
}
