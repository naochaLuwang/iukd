"use client";

import { TiChevronRight } from "react-icons/ti";

const CustomRightArrow = ({ onClick, ...rest }: any) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  return (
    <div
      onClick={() => onClick()}
      className="absolute items-center justify-center w-10 h-10 bg-white border rounded-full bg-opacity-20 lg:flex lg:right-12 right-4 lg:w-14 lg:h-14"
    >
      <TiChevronRight className="w-8 h-8 text-white cursor-pointer" />
    </div>
  );
};

export default CustomRightArrow;
