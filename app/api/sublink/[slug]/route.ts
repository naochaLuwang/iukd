import { NextResponse } from "next/server";
import prisma from "../../../../lib/prismadb";

interface IParams {
  slug?: string;
}

export async function GET(request: Request, { params }: { params: IParams }) {
  const { slug } = params;
  console.log(slug);
  const sublink = await prisma.sublinks.findMany({
    where: {
      link: {
        slug: slug,
      },
    },
  });

  return NextResponse.json(sublink);
}
