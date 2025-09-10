import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { provider_id } = body;

    if (!provider_id) {
      return NextResponse.json({ error: 'provider_id is required' }, { status: 400 });
    }

    const { data, error } = await supabase.from('bookings').insert([{ provider_id }]).select();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'Booking saved!', booking: data[0] }, { status: 201 });
  } catch (err: unknown) {
    if (err instanceof Error)
      return NextResponse.json({ error: err.message || 'Unexpected error' }, { status: 500 });
  }
}
