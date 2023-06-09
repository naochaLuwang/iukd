import React from "react";
import Link from "next/link";
import { IoMail } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full   text-white bg-[#222327]  h-auto py-10 ">
      <div className="grid w-full grid-cols-1 gap-6 px-6 lg:px-16 lg:grid-cols-4">
        <div className="flex flex-col w-full min-w-2xl">
          <h1 className="border border-b-[1px] border-transparent w-fit border-b-[#BDBDBF]">
            ABOUT
          </h1>
          <p className="mt-5 text-sm line-clamp-4 text-[#BDBDBF]">
            We are a Centre for Advanced Urology & Kidney Diseases is the only
            centre in entire North-Eastern Region of India dedicated only for
            Urological Problems. With the use of Most Advanced Laser Machines
          </p>
          <p className="mt-2 text-sm text-[#BDBDBF] hover:text-white">
            read more
          </p>
        </div>

        <div className="flex flex-col lg:pl-14">
          <h1 className="border border-b-[1px] border-transparent w-fit border-b-[#BDBDBF]">
            Department
          </h1>
          <Link href="/" className="mt-5">
            <p className="text-sm text-[#BDBDBF] hover:text-white">UROLOGY</p>
          </Link>
          <Link href="/" className="mt-2">
            <p className="text-sm text-[#BDBDBF] hover:text-white">
              URO-ONCOLOGY
            </p>
          </Link>
          <Link href="/" className="mt-2">
            <p className="text-sm text-[#BDBDBF] hover:text-white">
              NEPHROLOGY
            </p>
          </Link>
        </div>

        <div className="flex flex-col">
          <h1 className="border border-b-[1px] border-transparent w-fit border-b-[#BDBDBF]">
            GET IN TOUCH
          </h1>
          <div className="flex items-center mt-5 space-x-2 text-sm text-white">
            <span>
              <IoMail className="w-6 h-6 mr-2 text-white" />
            </span>{" "}
            Support available for 24/7
          </div>

          <p className="mt-3 text-[#BDBDBF] hover:text-white">
            aukd.assam@gmail.com
          </p>
        </div>

        <div className="flex flex-col">
          <h1 className="border border-b-[1px] border-transparent w-fit border-b-[#BDBDBF]">
            CONTACT US
          </h1>
          <div className="flex items-center mt-5 space-x-2">
            <BsTelephoneFill className="w-4 h-4 text-white" />
            <p className="text-sm text-[#BDBDBF] hover:text-white">
              +91 9864104444
            </p>
          </div>

          <div className="flex items-center mt-2 space-x-2">
            <BsTelephoneFill className="w-4 h-4 text-white" />
            <p className="text-sm text-[#BDBDBF] hover:text-white">
              +91 882272671
            </p>
          </div>
        </div>
      </div>
      <div className="w-full lg:h-10 py-1 lg:py-0 h-auto flex border-[1px] border-transparent border-opacity-80 border-y-[#BDBDBF] mt-14 items-center text-sm space-x-2 px-16 text-[#BDBDBF] justify-center lg:justify-start">
        <h1 className="text-center lg:text-start">
          Copyright &copy; 2023{" "}
          <span>
            <Link href="/" className="text-white">
              IUKD
            </Link>
          </span>
          Designed By{" "}
          <span>
            <Link
              href="https://relyhealthtech.com"
              target="_blank"
              className="text-white"
            >
              Rely Healthcare Technologies.
            </Link>
          </span>
          All rights reserved
        </h1>
      </div>

      <div className="flex items-center justify-center w-full mt-10 text-xs lg:text-sm ">
        <Link
          href="/about"
          className="text-[#BDBDBF] hover:text-white border border-transparent border-r-white lg:px-3 px-2"
        >
          About Us
        </Link>
        <Link
          href="/privacy_policy"
          className="text-[#BDBDBF] hover:text-white border border-transparent border-r-white lg:px-3 px-2"
        >
          Privacy Policy
        </Link>
        <Link
          href="/terms_conditions"
          className="text-[#BDBDBF] hover:text-white border border-transparent border-r-white  lg:px-3 px-2"
        >
          Terms & Conditions
        </Link>
        <Link
          href="/contact"
          className="text-[#BDBDBF] hover:text-white lg:px-3"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Footer;
