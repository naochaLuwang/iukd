import { NextResponse } from "next/server";
import prisma from "../../../../lib/prismadb";

interface IParams {
  slug?: string;
}

export const revalidate = 1;

export async function GET(request: Request, { params }: { params: IParams }) {
  const { slug } = params;
  console.log(slug);
  const doctor = await prisma.people.findFirstOrThrow({
    where: {
      slug: slug,
    },
    include: {
      department: true,
    },
  });

  return NextResponse.json(doctor);
}
