import Banner from "@/components/Banner";
import React from "react";

import Image from "next/image";
import { TiLocation } from "react-icons/ti";
import Link from "next/link";
import { getAllDoctors } from "../actions/getAllDoctors";

const OutreachPage = async () => {
  const doctors: PeopleProps[] = await getAllDoctors();
  return (
    <div className="w-full h-auto">
      <Banner title="Outreach OPDs" sublink="Outreach OPDs" />
      <div className="grid w-full grid-cols-1 gap-10 px-6 py-10 mx-auto lg:py-20 lg:px-0 lg:grid-cols-4 max-w-7xl">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="w-full h-[30rem] bg-white shadow-md">
            <div className="relative w-full h-56 ">
              <Image
                src={doctor.profileUrl}
                alt={doctor.firstName}
                fill
                style={{ objectFit: "fill" }}
              />
            </div>
            <div className="flex items-center px-2 pt-3">
              <TiLocation className="w-6 h-6" />
              <p>Guwahati</p>
            </div>
            <p className="w-full px-4 mt-1 text-sm text-neutral-600">
              {doctor.opdDays}
            </p>

            <div className="flex flex-col h-24 px-4 mt-10">
              <h1 className="text-lg font-medium tracking-wide">
                {`${doctor.salutation} ${doctor.firstName} ${doctor.lastName}`}
              </h1>
              <p className="mt-1 text-sm">{doctor.qualification}</p>
              <p className="mt-2 text-xs line-cramp-3">{doctor.designation}</p>
            </div>

            <div className="px-4 mt-7">
              <Link href={`/book_an_appoinment`}>
                <div className="w-full py-2 text-center text-white bg-blue-700 hover:bg-blue-800 focus:bg-blue-900">
                  Book an Appoinment
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OutreachPage;

export const revalidate = 0;
