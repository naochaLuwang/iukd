import prisma from "../../../lib/prismadb";

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const testimonials = await prisma.testimonial.findMany({
    where: {
      status: "ACTIVE",
    },
  });

  return NextResponse.json(testimonials);
}
