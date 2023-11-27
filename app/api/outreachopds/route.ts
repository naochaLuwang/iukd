import prisma from "../../../lib/prismadb";

import { NextResponse } from "next/server";

export const revalidate = 1;

export async function GET(request: Request) {
  const peoples = await prisma.outreachopds.findMany({
    include: {
      opdLists: true,
      doctor: {
        include: {
          department: true,
        },
      },
    },
  });

  return NextResponse.json(peoples);
}
