import { NextRequest, NextResponse } from 'next/server';
import { getCMSData, saveCMSData } from '@/lib/cmsStore';

export async function GET() {
  try {
    const data = getCMSData();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch CMS content' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const success = saveCMSData(body);
    if (success) {
      return NextResponse.json({ success: true, message: 'CMS updated successfully' });
    }
    return NextResponse.json({ error: 'Failed to save changes' }, { status: 500 });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to update CMS' }, { status: 500 });
  }
}

