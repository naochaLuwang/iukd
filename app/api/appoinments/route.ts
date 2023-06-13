import { NextResponse } from "next/server";
import prisma from "../../../lib/prismadb";
export async function POST(request: Request) {
  const body = await request.json();
  const {
    name,
    gender,
    age,
    address,
    email,
    phone,
    message,
    date,
    department,
    doctor,
  } = body;

  const newMessage = await prisma?.appoinments.create({
    data: {
      name: name,
      age: age,
      email: email,
      gender: gender,
      address: address,
      date: date,
      department: department,
      doctorId: doctor,
      phone: phone,
      message: message,
    },
  });

  return NextResponse.json(newMessage);
}
