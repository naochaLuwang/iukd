import Link from "next/link";
import React from "react";

interface BannerProps {
  title: string;
  sublink: string;
}

const Banner: React.FC<BannerProps> = ({ title, sublink }) => {
  return (
    <div className="flex items-center justify-center w-full h-40 bg-gradient-to-r from-teal-700 to-teal-950">
      <div>
        <h1 className="text-3xl tracking-wide text-center text-white">
          {title}
        </h1>
        <div className="flex items-center justify-center w-full mt-5 space-x-2">
          <Link href="/" className="text-xs text-white">
            Home /
          </Link>
          <p className="text-xs text-white">{sublink}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
