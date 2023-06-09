"use client";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Skeleton } from "../../components/ui/skeleton";
// import CarousalButton from "../CarousalButton";

import Link from "next/link";
import CustomLeftArrow from "../Arrow/CustomLeftArrow";
import CustomRightArrow from "../Arrow/CustomRightArrow";
import CustomDot from "../CustomDot";
import { BsQuote } from "react-icons/bs";

interface TestimonialProps {
  items: TestimonyProps[];
}

interface TestimonyProps {
  id: string;
  name: string;
  sub: string;
  status: string;
  order: number;
  testimony: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
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

const Testimonial: React.FC<TestimonialProps> = ({ items }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!Carousel) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <Skeleton className="w-full h-[450px]" />;
  }

  return (
    <div className="w-full h-[450px] bg-gradient-to-r from-teal-600 to-teal-900 py-20">
      <h1 className="w-full text-3xl text-center text-white text-medium">
        TESTIMONIALS
      </h1>

      <Carousel
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        rewindWithAnimation={true}
        autoPlaySpeed={10000}
        partialVisible={false}
        arrows={true}
        showDots={true}
        customDot={<CustomDot />}
        //   customButtonGroup={<CarousalButton />}
        // renderButtonGroupOutside={true}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        {items.map((item, index) => (
          <div key={index} className="h-auto mx-auto mt-20 mb-10 max-w-7xl">
            <h1 className="max-w-2xl mx-auto text-center text-white ">
              <BsQuote className="inline w-6 h-6 text-white" /> {item.testimony}
            </h1>

            <p className="w-full mt-5 text-2xl text-center text-white">
              {item.name}
            </p>
            <p className="w-full mt-2 text-center text-white">{item.sub}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonial;
