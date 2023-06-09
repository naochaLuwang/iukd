"use client";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Skeleton } from "../../components/ui/skeleton";
// import CarousalButton from "../CarousalButton";

import Link from "next/link";
import CarousalButtons from "../CarousalButtons";
import CustomLeftArrow from "../Arrow/CustomLeftArrow";
import CustomRightArrow from "../Arrow/CustomRightArrow";
import Counter from "./Counter";

interface HomeCarousalProps {
  items: CarousalProps[];
  counters: CounterProps[];
}

interface CarousalProps {
  imageUrl: string;
  title: string;
  description: string;
}
interface CounterProps {
  id: string;
  title: string;
  value: number;
  order: number;
  status: string;
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

const HomeCarousal: React.FC<HomeCarousalProps> = ({ items, counters }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!Carousel) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <div className="relative w-full h-auto">
      {!loading ? (
        <Carousel
          swipeable={false}
          draggable={false}
          responsive={responsive}
          autoPlay={true}
          infinite={true}
          rewindWithAnimation={true}
          autoPlaySpeed={10000}
          partialVisible={false}
          arrows={false}
          showDots={false}
          // customButtonGroup={<CarousalButtons />}
          // renderButtonGroupOutside={false}
          // customLeftArrow={<CustomLeftArrow />}
          // customRightArrow={<CustomRightArrow />}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="w-full h-[480px] bg-cover bg-no-repeat bg-top"
              style={{
                backgroundImage: `url(${item.imageUrl})`,
              }}
            >
              <div className="flex flex-col items-start mx-auto px-10 lg:px-0 justify-center space-y-5 lg:max-w-6xl h-[400px] text-white">
                <h1 className="max-w-xl text-3xl tracking-wider lg:text-3xl">
                  {item.title}
                </h1>
                <p className="max-w-xl text-lg tracking-wide lg:text-xl leading-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      ) : (
        <Skeleton className="w-full h-[480px]" />
      )}

      <Counter counter={counters} />
    </div>
  );
};

export default HomeCarousal;
