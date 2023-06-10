"use client";

import { useState, useEffect } from "react";

import Marquee from "react-fast-marquee";

import { FaFacebookF } from "react-icons/fa";

import Link from "next/link";

import { usePathname } from "next/navigation";

const Social = () => {
  const [data, setData] = useState<any | null>();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/alert`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <div
      className={` items-center flex justify-between w-full h-12 lg:px-20 px-5 py-1 bg-gradient-to-r from-teal-700 to-teal-950`}
    >
      <div className="flex items-center space-x-2 border-[1px] border-y-transparent border-x-white h-full px-2">
        <Link href="/">
          <FaFacebookF className="text-white " />
        </Link>
      </div>
      <Marquee>
        {data &&
          data.map((alert: any) => (
            <>
              {alert.slug ? (
                <Link href={alert.slug}>
                  <h1 className="mr-20 text-xs text-white" key={alert.id}>
                    {alert.title}
                  </h1>
                </Link>
              ) : (
                <h1 className="mr-20 text-xs text-white" key={alert.id}>
                  {alert.title}
                </h1>
              )}
            </>
          ))}
      </Marquee>
    </div>
  );
};

export default Social;
