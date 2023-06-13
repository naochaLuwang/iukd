import { getSubLink } from "@/app/actions/getSubLink";
import { getDepartment } from "@/app/actions/getDepartment";
import Banner from "@/components/Banner";
import React from "react";
import MyEditor from "../../../components/Editor";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TiLocation } from "react-icons/ti";

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
  const department = await getDepartment(params.slug);

  return (
    <>
      {sublink && (
        <div className="w-full h-auto">
          <Banner title={sublink[0]?.title} sublink={sublink[0]?.title} />
          <div className="h-auto py-10 mx-auto max-w-7xl min-h-[50vh]">
            <MyEditor content={sublink[0]?.content} />
          </div>
          <div className="w-full mx-auto max-w-7xl">
            <h1 className="text-2xl ">
              Meet{" "}
              <span className="text-3xl text-teal-500">Our Specialist</span>
            </h1>

            <div className="grid w-full grid-cols-1 gap-10 px-6 pb-10 mx-auto lg:py-10 lg:px-0 lg:grid-cols-4 max-w-7xl">
              {department &&
                department.peoples
                  .sort((a: any, b: any) => a.order - b.order)
                  .map((doctor: any) => (
                    <div
                      key={doctor.id}
                      className="w-full h-[30rem] bg-white shadow-md"
                    >
                      <div className="relative w-full h-56">
                        {doctor.profileUrl === "" ? (
                          <Image
                            src="/docplaceholder.jpeg"
                            alt={doctor.firstName}
                            fill
                            style={{ objectFit: "fill" }}
                          />
                        ) : (
                          <Image
                            src={doctor.profileUrl}
                            alt={doctor.firstName}
                            fill
                            style={{ objectFit: "fill" }}
                          />
                        )}
                      </div>
                      <div className="flex items-center px-2 pt-3">
                        <TiLocation className="w-6 h-6" />
                        <p>Guwahati</p>
                      </div>

                      <div className="flex flex-col h-24 px-4 mt-10">
                        <h1 className="text-lg font-medium tracking-wide">
                          {`${doctor.salutation} ${doctor.firstName} ${doctor.lastName}`}
                        </h1>
                        <p className="mt-1 text-sm">{`${doctor.qualification} (${doctor?.department.departmentName})`}</p>
                        <p className="mt-2 text-xs line-cramp-3">
                          {doctor.designation}
                        </p>
                      </div>

                      <div className="px-4 mt-7">
                        <Link href={`/doctor/${doctor.slug}`}>
                          <div className="w-full py-2 text-center text-white bg-blue-700 hover:bg-blue-800 focus:bg-blue-900">
                            Read More
                          </div>
                        </Link>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DepartmentDetails;

export const revalidate = 0;
