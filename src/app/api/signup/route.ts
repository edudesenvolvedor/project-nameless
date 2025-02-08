'use server';

import { NextRequest, NextResponse } from 'next/server';
import signUpSchema, { SignUp } from '@/schemas/signUpSchema';

export async function POST(req: NextRequest) {
  const data: SignUp = await req.json();

  try {
    const parse = signUpSchema.parse(data);
    return NextResponse.json(parse);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 400, message: error });
  }
}
