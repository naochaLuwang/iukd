import prisma from "../../../lib/prismadb";

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const terms = await prisma.termsConditions.findMany({});

  return NextResponse.json(terms);
}
