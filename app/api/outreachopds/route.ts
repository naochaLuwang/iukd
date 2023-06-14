import prisma from "../../../lib/prismadb";

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const peoples = await prisma.outreachopds.findMany({
    include: {
      opdLists: true,
      doctor: true,
    },
  });

  return NextResponse.json(peoples);
}
