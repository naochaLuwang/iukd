"use client";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
// import CarousalButton from "../CarousalButton";

import Link from "next/link";
import { TiLocation } from "react-icons/ti";

interface DoctorCarouselProps {
  doctors: PeopleProps[];
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const DoctorCarousal: React.FC<DoctorCarouselProps> = ({ doctors }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!Carousel) {
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <div>
      {!loading ? (
        <Carousel
          responsive={responsive}
          autoPlay={true}
          infinite={true}
          rewindWithAnimation={true}
          autoPlaySpeed={4000}
          partialVisible={false}
          arrows={false}
          showDots={true}
          //   customButtonGroup={<CarousalButton />}
          //   renderButtonGroupOutside={true}
        >
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="h-auto pb-5 ml-5 bg-white border shadow-md w-72"
            >
              <div className="relative w-full h-56 ">
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
                <p className="mt-1 text-sm">{doctor.qualification}</p>
                <p className="mt-2 text-xs line-cramp-3">
                  {doctor.designation}
                </p>
              </div>

              <div className="px-4 mt-7">
                <Link href="/book_an_appoinment">
                  <div className="w-full py-2 text-center text-white bg-blue-700 hover:bg-blue-800 focus:bg-blue-900">
                    Book an Appoinment
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </Carousel>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {[...Array(4)].map((_, index) => (
            <Skeleton key={index} className="w-full h-72" />
          ))}
        </div>
      )}
    </div>
  );
};

export default DoctorCarousal;
