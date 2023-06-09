import prisma from "../../../lib/prismadb";

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const links = await prisma.links.findMany({
    include: {
      sublinks: true,
    },
  });

  return NextResponse.json(links);
}
