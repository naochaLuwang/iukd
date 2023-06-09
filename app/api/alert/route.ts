import prisma from "../../../lib/prismadb";

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const alerts = await prisma.alerts.findMany({
    where: {
      status: "ACTIVE",
    },
  });

  return NextResponse.json(alerts);
}
