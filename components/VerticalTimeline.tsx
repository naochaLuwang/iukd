"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import ReactDOMServer from "react-dom/server";

import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";
import Link from "next/link";
import { BiClinic } from "react-icons/bi";

const VerticalTimelineComponent = ({ data }: any) => {
  const today = new Date().toISOString().split("T")[0]; // Get the current date in YYYY-MM-DD format

  const filteredData = data.filter((item: any) => item.date >= today);
  filteredData.sort((a, b) => new Date(a.date) - new Date(b.date));

  if (filteredData.length === 0) {
    return (
      <div className="flex items-center justify-center w-full h-[60vh]">
        <h1>No outrach Opds</h1>
      </div>
    );
  }

  return (
    <div>
      <VerticalTimeline>
        {filteredData.map((item: any) => (
          <VerticalTimelineElement
            key={item.id}
            className="font-quicksand vertical-timeline-element--work"
            date={
              <span className="text-2xl tracking-wider">
                {new Date(item.date).toLocaleDateString("en-GB", {
                  weekday: "long",
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </span>
            }
            iconStyle={{ background: "teal", color: "#fff" }}
            contentStyle={{
              background: "white",
              height: "auto",
              border: "1px solid teal",
              borderRadius: "20px",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  teal",
            }}
            icon={<BiClinic />}
          >
            <div className="flex flex-col w-full h-auto bg-white">
              <div className="flex w-full h-auto space-x-3">
                <div className="relative flex-shrink-0 w-40 h-40">
                  <Image
                    src={item.doctor.profileUrl || "/docplaceholder.jpeg"}
                    alt="doc image"
                    fill
                    className="rounded-lg"
                  />
                </div>
                <div className="flex flex-col h-auto mt-5 space-y-1">
                  <h1 className="text-2xl font-medium font-quicksand">
                    {`${item.doctor.salutation} ${item.doctor.firstName} ${item.doctor.lastName}`}
                  </h1>
                  <h1 className="text-sm font-medium font-quicksand">
                    {`${item.doctor.qualification} (${item.doctor.department.departmentName})`}
                  </h1>
                  <h1 className="text-sm font-medium tracking-wide text-indigo-950 font-quicksand">
                    {item.doctor.designation}
                  </h1>
                </div>
              </div>
              <h1 className="mt-5">
                Consult <span className="text-lg">Our Specialist</span>
              </h1>
              <div className="grid grid-cols-2 gap-2 mt-5">
                {item.opdLists.map((opdlist: any) => (
                  <div
                    key={opdlist.id}
                    className="py-3 text-center border rounded-md shadow-sm bg-gradient-to-tr from-teal-700 to-teal-800"
                  >
                    <h1 className="text-base font-medium text-white font-poppins">
                      {opdlist.clinicName}
                    </h1>
                    <h1 className="text-sm text-white">{opdlist.location}</h1>
                    <h1 className="text-white">{opdlist.timing}</h1>
                  </div>
                ))}
              </div>
              <div className="flex justify-center w-full mt-5 h-fit">
                <Link
                  href={`/book_an_appoinment?dep=${item.doctor.department.departmentName}&id=${item.id}`}
                  className="relative inline-flex items-center px-10 py-3 overflow-hidden text-sm font-medium text-teal-600 border-2 border-teal-600 rounded-full hover:text-white group hover:bg-gray-50"
                >
                  <span className="absolute left-0 block w-full h-0 transition-all bg-teal-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                  <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span className="relative">Book an Appointment</span>
                </Link>
              </div>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default VerticalTimelineComponent;
