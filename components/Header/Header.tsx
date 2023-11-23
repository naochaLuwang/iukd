"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { BsFillTelephoneFill } from "react-icons/bs";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  const pathName = usePathname();
  console.log(pathName);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      if (scrollPosition > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerVariants = {
    initial: { height: "7rem" },
    sticky: { height: "6rem" },
  };

  const imageVariants = {
    initial: { height: "6rem" },
    sticky: { height: "4rem" },
  };

  const textVariants = {
    initial: { fontSize: "1rem" },
    sticky: { fontSize: "0.8rem" },
  };

  return (
    <motion.div
      className={`z-50 items-center hidden lg:flex w-full  shadow-sm h-32 py-8 ${
        !isSticky ? "transition-all duration-300 ease-in-out" : "fixed top-0"
      } ${pathName === "/" && !isSticky ? "bg-white" : "bg-white"}`}
      variants={headerVariants}
      initial="initial"
      animate={isSticky ? "sticky" : "initial"}
    >
      <div className="flex items-center justify-between w-full px-10 ">
        <div className="flex items-center">
          <Link href="/">
            <div
              className={`relative w-40 ${
                isSticky
                  ? "h-32 transition-all duration-100 ease-in-out"
                  : "h-36 transition-all duration-100 ease-in-out"
              }`}
            >
              <Image
                src={"/iukdlogop.png"}
                alt="IUKD logo"
                fill
                style={{ objectFit: "contain" }}
                priority
                variants={imageVariants}
                initial="initial"
                animate={isSticky ? "sticky" : "initial"}
              />
            </div>
          </Link>

          <div className="relative h-40 w-96">
            <Image
              src={"/iukdspelling.png"}
              alt="IUKD logo"
              fill
              style={{ objectFit: "fill" }}
              priority
              variants={imageVariants}
              initial="initial"
              animate={isSticky ? "sticky" : "initial"}
            />
          </div>
        </div>

        <div className="flex items-center space-x-5 ">
          {/* <Link href="/contact">
            <div className="flex items-center justify-center h-auto px-4 py-2 text-sm text-white bg-teal-800 rounded-md shadow-md w-fit">
              <motion.span
                variants={textVariants}
                initial="initial"
                animate={isSticky ? "sticky" : "initial"}
              >
                Call Me
              </motion.span>
            </div>
          </Link> */}

          <div className="flex flex-col">
            <div className="flex items-center space-x-3">
              <BsFillTelephoneFill className="w-6 h-6" />
              <h1 className="text-2xl">8822721671</h1>
            </div>
            <h1 className="text-lg font-medium">Book An Appoinment</h1>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
