import { getSubLink } from "@/app/actions/getSubLink";
import Banner from "@/components/Banner";
import React from "react";
import MyEditor from "../../../components/Editor";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const departments = await fetch(
    `${process.env.API_URL}/api/sublinks/${slug}`
  ).then((res) => res.json());

  // optionally access and extend (rather than replace) parent metadata

  return {
    title: `${departments[0].title}| IUKD`,
  };
}

export async function generateStaticParams() {
  const response = await fetch(
    `${process.env.API_URL}/api/sublink/departments`
  );

  const services = await response.json();

  return services.map((service: any) => ({
    slug: service.slug,
  }));
}

const DepartmentDetails = async ({ params }: any) => {
  const sublink: any = await getSubLink(params.slug);

  return (
    <>
      {sublink && (
        <div className="w-full h-auto">
          <Banner title={sublink[0]?.title} sublink={sublink[0]?.title} />
          <div className="h-auto py-10 mx-auto max-w-7xl min-h-[50vh]">
            <MyEditor content={sublink[0]?.content} />
          </div>
        </div>
      )}
    </>
  );
};

export default DepartmentDetails;

export const revalidate = 0;
