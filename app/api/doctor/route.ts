import prisma from "../../../lib/prismadb";

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const doctors = await prisma.people.findMany({
    include: {
      department: true,
    },
  });

  return NextResponse.json(doctors);
}
