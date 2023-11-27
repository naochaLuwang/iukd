import prisma from "../../../lib/prismadb";

import { NextResponse } from "next/server";

export const revalidate = 1;

export async function GET(request: Request) {
  const links = await prisma.links.findMany({
    where: {
      status: "ACTIVE",
    },
    include: {
      sublinks: true,
    },
  });

  return NextResponse.json(links);
}
