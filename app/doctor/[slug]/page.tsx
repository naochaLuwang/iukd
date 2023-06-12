import React from "react";
import MyEditor from "../../../components/Editor";
import { Metadata } from "next";
import { getDoctor } from "../../actions/getDoctor";
import Image from "next/image";
import { getAllDoctors } from "@/app/actions/getAllDoctors";
import DoctorCarousal from "../../../components/DoctorCarousal";
import Link from "next/link";

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

  const filteredDoctors = doctors.filter(
    (doctorItem: PeopleProps) => doctorItem.slug !== params.slug
  );

  const opdAvailableDays = doctor.opdDays.split(", ").map((day) => day.trim());
  console.log(opdAvailableDays);

  const morningSlots: any = [];
  const eveningSlots: any = [];

  doctor.opdTiming.split(",").forEach((slot) => {
    const [time, period] = slot.trim().split(" ");
    const [hour, minutes] = time.split(":");
    const hourValue = parseInt(hour);

    if (
      (hourValue >= 9 && hourValue < 12 && period === "A.M") ||
      (hourValue === 12 && period === "P.M")
    ) {
      morningSlots.push(slot.trim());
    } else if (hourValue >= 3 && hourValue < 7 && period === "P.M") {
      eveningSlots.push(slot.trim());
    }
  });

  console.log(morningSlots);
  console.log(eveningSlots);

  return (
    <div className="w-full h-auto">
      <div className="w-full h-56 py-10 bg-gradient-to-r from-teal-700 to-teal-800 ">
        <div className="flex items-start h-auto px-4 mx-auto space-x-4 lg:px-0 lg:items-center lg:space-x-10 max-w-7xl">
          <div className="relative flex-shrink-0 w-24 h-24 lg:w-40 lg:h-40">
            {doctor.profileUrl === "" ? (
              <Image
                src="/docplaceholder.jpeg"
                alt={doctor.firstName}
                fill
                className="rounded-full"
              />
            ) : (
              <Image
                src={doctor.profileUrl}
                alt={doctor.firstName}
                fill
                className="rounded-full"
              />
            )}
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
      <div className="max-w-7xl w-full h-auto min-h-[50vh] mx-auto py-10 flex">
        <div className="w-full h-auto pr-5">
          <MyEditor content={doctor?.bio} />
        </div>

        <div className="h-auto mt-5 w-96">
          <h1 className="text-2xl tracking-wide font-quicksand">
            Available Days
          </h1>
          <div className="grid grid-cols-4 mt-3">
            {opdAvailableDays.map((data, index) => (
              <p
                key={index}
                className="w-16 py-1 text-center text-white shadow-md rounded-2xl bg-gradient-to-tr from-teal-700 to-teal-800"
              >
                {data}
              </p>
            ))}
          </div>

          {morningSlots && (
            <div className="mt-5">
              <h1 className="text-xl text-neutral-700">Morning</h1>
              <div className="grid grid-cols-3 gap-2 mt-5">
                {morningSlots.map((slot: any, index: any) => (
                  <p
                    className="w-full px-2 py-2 text-sm font-medium tracking-wide text-center border-2 border-teal-700 rounded-sm"
                    key={index}
                  >
                    {slot}
                  </p>
                ))}
              </div>
            </div>
          )}

          {eveningSlots && (
            <div className="mt-5">
              <h1 className="text-xl text-neutral-700">Evening</h1>
              <div className="grid grid-cols-3 gap-2 mt-5">
                {eveningSlots.map((slot: any, index: any) => (
                  <p
                    className="w-full px-2 py-2 text-sm font-medium tracking-wide text-center border-2 border-teal-700 rounded-sm"
                    key={index}
                  >
                    {slot}
                  </p>
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-center w-full mt-5 h-fit">
            <Link
              href={`/book_an_appoinment?dep=${doctor.department.departmentName}&id=${doctor.id}`}
              className="relative inline-flex items-center px-10 py-3 overflow-hidden text-sm font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50"
            >
              <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="relative">Book an Appoinment</span>
            </Link>
          </div>
        </div>
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
