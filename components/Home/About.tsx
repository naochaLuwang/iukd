import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-start w-full h-auto mx-auto sm:py-10 lg:pb-20 lg:pt-40 lg:max-w-7xl">
      <div className="flex flex-col items-center w-full space-y-2">
        <h1 className="text-2xl font-medium">About Us</h1>
        <p className="text-base">Institute of Urology And Kidney Diseases</p>
      </div>
      <div className="w-full mx-auto mt-10 max-w-7xl">
        <div className="flex flex-col items-center w-full px-4 lg:px-0 lg:flex-row">
          <div className="flex flex-col space-y-2 lg:flex-2">
            <h1 className="w-40 text-lg border border-b-2 border-transparent lg:text-xl border-b-teal-700">
              Who We Are
            </h1>
            <p className="text-sm leading-loose text-justify lg:text-base">
              We are a Centre for Advanced Urology & Kidney Diseases is the only
              centre in entire North-Eastern Region of India dedicated only for
              Urological Problems. With the use of Most Advanced Laser Machines
              and all the Urological procedures we provide the best possible
              Urology Care for Kidney Stones, Prostate Enlargement Problems in
              elderly male, Kidney and Prostate Cancer, Male sexual problems,
              Female Urinary problems, Emergency Urology Services. Supported by
              two Urologist, Nephrologists, Cardiologist, Medicine Specialist,
              General Surgeon and 20 well trained Urology staffs
            </p>
          </div>
          <div className="flex-1 h-auto px-10 mt-5 ml-0 lg:ml-24 lg:mt-0 ">
            <div className="relative h-[250px] w-[450px] rounded-2xl">
              <Image
                src={"/about2.jpg"}
                alt="about Image"
                fill
                style={{ objectFit: "fill" }}
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
