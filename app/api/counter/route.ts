import prisma from "../../../lib/prismadb";

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const counters = await prisma.counters.findMany({
    where: {
      status: "ACTIVE",
    },
  });

  return NextResponse.json(counters);
}
