import { NextResponse } from "next/server";
import prisma from "../../../lib/prismadb";
export async function POST(request: Request) {
  const body = await request.json();
  const { name, phone, description } = body;

  const newMessage = await prisma?.message.create({
    data: {
      name: name,
      phone: phone,
      message: description,
      isRead: "NO",
    },
  });

  return NextResponse.json(newMessage);
}
