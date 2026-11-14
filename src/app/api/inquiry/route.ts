import { NextRequest, NextResponse } from 'next/server';
import { addInquiry } from '@/lib/cmsStore';

const TARGET_NOTIFICATION_EMAIL = 'sweetyalley2@gmail.com';

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
  const timestamp = inquiry.createdAt ? new Date(inquiry.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) : new Date().toLocaleString('en-IN');
  
  const emailPayload = {
    _subject: `🎓 New Admission Inquiry: ${inquiry.name} (${inquiry.course || 'General'})`,
    _template: 'table',
    _captcha: 'false',
    recipient: TARGET_NOTIFICATION_EMAIL,
    institute: 'Cambridge Institute of Management Studies (CIMS Group)',
    candidate_name: inquiry.name,
    candidate_phone: inquiry.phone,
    candidate_email: inquiry.email || 'Not provided',
    selected_program: inquiry.course || 'General Admission Inquiry',
    academic_qualification: inquiry.qualification || 'Not provided',
    city_location: inquiry.city || 'Not specified',
    inquiry_notes: inquiry.message || 'Quick admission inquiry from CIMS Portal',
    submission_time_ist: timestamp
  };

  try {
    // Attempt dispatch via FormSubmit ajax endpoint with 6s timeout so it never hangs or crashes
    const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(TARGET_NOTIFICATION_EMAIL)}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(emailPayload),
      signal: AbortSignal.timeout(6000)
    });

    if (response.ok) {
      console.log(`[INQUIRY_EMAIL] Successfully notified ${TARGET_NOTIFICATION_EMAIL} for inquiry from ${inquiry.name}`);
      return true;
    } else {
      console.warn(`[INQUIRY_EMAIL] FormSubmit responded with status: ${response.status}`);
    }
  } catch (err: any) {
    // Gracefully handle any network timeout / fetch failed error without crashing
    console.warn('[INQUIRY_EMAIL] External notification dispatch skipped (offline/network timeout):', err?.message || 'fetch failed');
  }

  return false;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, course, qualification, city, message } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and Phone are required' }, { status: 400 });
    }

    // 1. Save to CMS store / local database
    const savedInquiry = addInquiry({
      name,
      phone,
      email: email || '',
      course: course || 'BBA in Hospital Management',
      qualification: qualification || '',
      city: city || '',
      message: message || ''
    });

    // 2. Dispatch notification email to sweetyalley2@gmail.com
    // Run asynchronously without blocking the response
    sendEmailNotification(savedInquiry).catch(err => {
      console.error('[INQUIRY_EMAIL] Background email dispatch failed:', err);
    });

    return NextResponse.json({ 
      success: true, 
      inquiry: savedInquiry,
      notifiedEmail: TARGET_NOTIFICATION_EMAIL
    }, { status: 201 });
  } catch (err: any) {
    console.error('Error in /api/inquiry:', err);
    return NextResponse.json({ error: 'Failed to process inquiry' }, { status: 500 });
  }
}
