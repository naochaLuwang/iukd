import { NextResponse } from "next/server";
import prisma from "../../../../lib/prismadb";

interface IParams {
  slug?: string;
}

export async function GET(request: Request, { params }: { params: IParams }) {
  const { slug } = params;
  console.log(slug);
  const sublink = await prisma.links.findUnique({
    where: {
      slug: slug,
    },
    include: {
      sublinks: true,
    },
  });

  return NextResponse.json(sublink);
}
