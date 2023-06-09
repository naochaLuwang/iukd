import prisma from "../../../lib/prismadb";

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const departments = await prisma.department.findMany({
    where: {
      status: "ACTIVE",
    },
    include: {
      peoples: true,
    },
  });

  return NextResponse.json(departments);
}
