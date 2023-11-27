import prisma from "../../../lib/prismadb";

import { NextResponse } from "next/server";

const revalidate = 1;

export async function GET(request: Request) {
  const links = await prisma.sublinks.findMany({});

  return NextResponse.json(links);
}
