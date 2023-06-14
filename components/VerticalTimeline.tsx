"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";

const VerticalTimelineComponent = () => {
  return (
    <div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className=" vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentStyle={{
            background: "white",
            height: "25rem",
            border: "1px solid black",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        >
          <div className="flex flex-col w-full h-auto">
            <div className="flex w-full h-auto">
              <div className="relative w-40 h-40">
                <Image src="/docplaceholder.jpeg" alt="doc image" fill />
              </div>
              <div className="flex flex-col h-auto space-y-0">
                <h1>John Doe</h1>
                <p>ms, mch</p>
                <p>Consultant Urologist </p>
              </div>
            </div>
            <h1 className="mt-2">Consult Our Specialist</h1>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default VerticalTimelineComponent;
