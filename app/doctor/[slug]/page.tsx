import React from "react";
import MyEditor from "../../../components/Editor";
import { Metadata } from "next";
import { getDoctor } from "../../actions/getDoctor";
import Image from "next/image";
import { getAllDoctors } from "@/app/actions/getAllDoctors";
import DoctorCarousal from "../../../components/DoctorCarousal";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const doctor = await fetch(
    `${process.env.API_URL}/api/doctor/${params.slug}}`
  ).then((res) => res.json());

  // optionally access and extend (rather than replace) parent metadata

  return {
    title: `${doctor?.firstName}| IUKD`,
  };
}

export async function generateStaticParams() {
  const response = await fetch(`${process.env.API_URL}/api/doctor`);

  const doctors = await response.json();

  return doctors.map((doctor: PeopleProps) => ({
    slug: doctor.slug,
  }));
}

const DoctorDetails = async ({ params }: any) => {
  const doctor: PeopleProps = await getDoctor(params.slug);
  const doctors = await getAllDoctors();
  console.log(doctor);

  const filteredDoctors = doctors.filter(
    (doctorItem: PeopleProps) => doctorItem.slug !== params.slug
  );

  return (
    <div className="w-full h-auto">
      <div className="w-full h-56 py-10 bg-gradient-to-r from-teal-700 to-teal-800 ">
        <div className="flex items-start h-auto px-4 mx-auto space-x-4 lg:px-0 lg:items-center lg:space-x-10 max-w-7xl">
          <div className="relative flex-shrink-0 w-24 h-24 lg:w-40 lg:h-40">
            <Image
              src={doctor.profileUrl}
              alt={doctor.firstName}
              fill
              className="rounded-full"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <h1 className="text-xl text-white lg:text-3xl">{`${doctor.salutation} ${doctor.firstName} ${doctor.lastName}`}</h1>
            <p className="text-xs text-white lg:text-sm">
              {doctor.qualification}
            </p>
            <p className="text-xs leading-relaxed tracking-wide text-white lg:text-sm lg:leading-0 ">
              {doctor.designation}
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl w-full h-auto min-h-[50vh] mx-auto py-10">
        <MyEditor content={doctor?.bio} />
      </div>

      <div className="w-full h-auto px-4 py-10 mx-auto max-w-7xl lg:px-0">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-base lg:text-xl ">
            Consult <span className="text-teal-600">Our Experts</span>
          </h1>
          <div className="px-4 py-2 text-xs text-white bg-blue-700 rounded-md shadow-md lg:text-sm w-fit">
            View All
          </div>
        </div>
        <div className="w-full h-auto py-10 mx-auto max-w-7xl">
          <DoctorCarousal doctors={filteredDoctors} />
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;

export const revalidate = 5;
