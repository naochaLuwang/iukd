import prisma from "../../../lib/prismadb";

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const privacypolicies = await prisma.privacypolicies.findMany({
    where: {
      status: "ACTIVE",
    },
  });

  return NextResponse.json(privacypolicies);
}
