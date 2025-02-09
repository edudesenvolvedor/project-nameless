'use server';

import { NextRequest, NextResponse } from 'next/server';
import signUpSchema, { SignUp } from '@/schemas/signUpSchema';
import connect from '@/lib/database/mongoose';
import UserModel from '@/model/UserModel';

export async function POST(req: NextRequest) {
  const data: SignUp = await req.json();

  try {
    const parse = signUpSchema.parse(data);

    await connect();

    const user = await UserModel.create({
      name: parse.name,
      lastname: parse.lastname,
      email: parse.email,
      password: parse.password,
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 400, message: error });
  }
}
