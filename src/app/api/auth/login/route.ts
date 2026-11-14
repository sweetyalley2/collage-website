import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    const validEmail = (process.env.ADMIN_EMAIL || 'admin@cimsgroup.org').trim().toLowerCase();
    const validPassword = process.env.ADMIN_PASSWORD || 'CIMS@2026#SecureAdmin!Auth';

    if ((email?.trim().toLowerCase() === validEmail || email?.trim().toLowerCase() === 'admin') && password === validPassword) {
      const response = NextResponse.json({
        success: true,
        user: { email: validEmail, role: 'SuperAdmin', name: 'CIMS Administrator' }
      });
      response.cookies.set('cims_admin_token', 'authenticated_session_token_' + Date.now(), {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        maxAge: 60 * 60 * 24 * 7 // 7 days
      });
      return response;
    }

    return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
  } catch (err) {
    return NextResponse.json({ error: 'Authentication failed' }, { status: 500 });
  }
}
