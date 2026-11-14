import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    const validEmail = 'admin@cimsgroup.org';
    const validPassword = 'Sweety@123';

    if ((email?.toLowerCase() === validEmail.toLowerCase() || email?.toLowerCase() === 'admin') && password === validPassword) {
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
