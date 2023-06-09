import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="heading">
          <h1>Our Services</h1>
          <p className="max-w-xl mx-auto text-sm text-center">
            Centre for Advanced Urology & Kidney Diseases is the only centre in
            the entire North-Eastern Region of India dedicated only to
            Urological Problems
          </p>
        </div>
        <div className="content">
          <div className="shadow-md box">
            <div className="flex flex-col items-center inner">
              <Image
                src={"/services/vec.png"}
                width={60}
                height={60}
                alt="service image"
              />
              <p className="text-sm">Endo Urological Surgeries</p>
            </div>
          </div>
          <div className="shadow-md box">
            <div className="relative flex flex-col items-center inner">
              <Image
                src={"/services/vec2.jpg"}
                width={60}
                height={60}
                alt="service image"
              />
              <p className="text-sm">Laparoscopic Uro Surgeries</p>
            </div>
          </div>
          <div className="shadow-md box">
            <div className="flex flex-col items-center inner">
              <Image
                src={"/services/vec3.png"}
                width={60}
                height={60}
                alt="service image"
              />
              <p className="text-sm">Reconstructive Surgeries</p>
            </div>
          </div>
          <div className="shadow-md box">
            <div className="flex flex-col items-center inner">
              <Image
                src={"/services/vec4.png"}
                width={60}
                height={60}
                alt="service image"
              />
              <p className="text-sm">Urology Cancer Clinic</p>
            </div>
          </div>
        </div>
        <div className="content2 mt-[13px]">
          <div className="shadow-md box">
            <div className="flex flex-col items-center inner">
              <Image
                src={"/services/vec5.png"}
                width={60}
                height={60}
                alt="service image"
              />
              <p className="text-sm">Male & Female Urinary Problem</p>
            </div>
          </div>
          <div className="shadow-md box">
            <div className="flex flex-col items-center inner">
              <Image
                src={"/services/vec6.png"}
                width={60}
                height={60}
                alt="service image"
              />
              <p className="text-sm">Male Infertility & Sexual Problem</p>
            </div>
          </div>
          <div className="shadow-md box">
            <div className="flex flex-col items-center inner">
              <Image
                src={"/services/vec7.png"}
                width={60}
                height={60}
                alt="service image"
              />
              <p className="text-sm">Nocturia & Bed Wetting Clinic</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
