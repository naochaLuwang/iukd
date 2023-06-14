"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";

const VerticalTimelineComponent = ({ data }: any) => {
  console.log(data);

  return (
    <div>
      <VerticalTimeline>
        {data &&
          data.map((item) => (
            <VerticalTimelineElement
              key={item.id}
              className=" vertical-timeline-element--work"
              date={item.date}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentStyle={{
                background: "white",
                height: "auto",
                border: "1px solid black",
                borderRadius: "20px",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
            >
              <div className="flex flex-col w-full h-auto ">
                <div className="flex w-full h-auto space-x-3">
                  <div className="relative flex-shrink-0 w-40 h-40">
                    <Image src="/docplaceholder.jpeg" alt="doc image" fill />
                  </div>
                  <div className="flex flex-col h-auto space-y-1">
                    <h1>
                      {item?.doctor?.salutation} {item.doctor?.firstName}{" "}
                      {item.doctor?.lastName}
                    </h1>
                    <h1 className="text-xs font-medium">
                      {item?.doctor.qualification}
                    </h1>
                    <h1 className="text-sm font-medium">
                      {item?.doctor.designation}
                    </h1>
                  </div>
                </div>
                <h1 className="mt-5">Consult Our Specialist</h1>
                <div className="grid grid-cols-2 gap-2 mt-5">
                  {item?.opdLists.map((opdlist) => (
                    <div key={opdlist.id}>
                      <h1 className="text-sm">{opdlist.clinicName}</h1>
                      <h1 className="text-sm">{opdlist.location}</h1>
                    </div>
                  ))}
                </div>
              </div>
            </VerticalTimelineElement>
          ))}
      </VerticalTimeline>
    </div>
  );
};

export default VerticalTimelineComponent;
