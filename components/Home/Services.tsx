"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
// import { useInView } from "react-intersection-observer";
// import gsap from "gsap";
// import ScrollReveal from "../ScrollReveal";

const data = [
  {
    icon: "services/iukds1.png",
    title: "Endo Urological Surgeries",
    slug: "endo_urological_surgeries",
    description:
      "Experience exceptional care for urological conditions with our advanced Endo Urological Surgeries. Utilizing minimally invasive techniques, our highly skilled team and state-of-the-art facilities ensure faster recovery, reduced discomfort, and outstanding outcomes. Choose us for excellence in urological care.",
  },

  {
    icon: "services/iukds7.png",
    title: "Reconstructive Surgeries",
    slug: "reconstructive_surgeries",
    description:
      "Discover the Power of Transformation at our Reconstructive Surgeries Department. Expertly revitalizing form and function, we redefine possibilities. From breast enhancements to facial rejuvenation, abdominal wall repair to limb reconstruction, and genitourinary restoration, trust us to reshape your world.",
  },
  {
    icon: "services/iukds2.png",
    title: "Urology Cancer Clinic",
    slug: "urology_cancer_clinic",
    description:
      "Discover exceptional care at our Urological Cancer Clinic. With a multidisciplinary approach, advanced treatments, and compassionate support, we provide personalized care for urological cancers. Choose us for expertise, innovation, and a path towards recovery.",
  },
  {
    icon: "services/iukds6.png",
    title: "Laparoscopic Uro Surgeries",
    slug: "laparoscopic_uro_surgeries",
    description:
      "Experience cutting-edge laparoscopic urological surgeries for faster recovery and minimal scarring. Our skilled team and state-of-the-art facilities ensure excellent outcomes. Choose us for advanced minimally invasive care.",
  },
  {
    icon: "services/iukds3.png",
    slug: "male_female_urinary_problem",
    title: "Male and Female Urinary Problem",
    description:
      "Experience comprehensive care for male and female urinary problems at our specialized clinic. Our expert team provides personalized solutions and advanced treatments, helping you regain comfort and enhance your quality of life. Choose us for effective and compassionate care.",
  },
  {
    icon: "services/iukds5.png",
    slug: "male_fertility_sexual_problem",
    title: "Male Infertility & Sexual Problem",
    description:
      "Comfort and Care at Your Reach: Our hospital provides 24/7 Bed Facility, ensuring a peaceful and supportive environment for your recovery. With well-appointed rooms, attentive staff, and comprehensive medical services, we strive to make your stay as comfortable as possible. Rest assured, our dedicated team is here to provide personalized care and support throughout your journey towards wellness.",
  },
];

const Services = () => {
  //   const [ref, inView] = useInView({
  //     triggerOnce: true,
  //     threshold: 0.2, // Adjust the threshold as needed
  //   });

  const containerRef = useRef<HTMLDivElement>(null);

  //   useEffect(() => {
  //     if (inView) {
  //       const facilityItems =
  //         containerRef.current?.querySelectorAll(".service-item");
  //       if (facilityItems) {
  //         gsap.from(facilityItems, {
  //           opacity: 0,
  //           y: 100,
  //           stagger: 0.2,
  //           duration: 0.8,
  //           ease: "power3.out",
  //         });
  //       }
  //     }
  //   }, [inView]);
  return (
    <div className="w-full h-auto py-10 bg-[#f0f3fa]">
      <div className="w-full h-auto mx-auto max-w-7xl">
        <div className="mt-10 heading">
          <h1 className="pb-1 text-3xl font-medium text-center">
            Our Services
          </h1>
          <p className="max-w-xl mx-auto text-sm leading-loose text-center">
            Centre for Advanced Urology & Kidney Diseases is the only centre in
            the entire North-Eastern Region of India dedicated only to
            Urological Problems
          </p>
        </div>

        <div
          className="grid w-full grid-cols-1 gap-6 px-4 py-10 lg:py-20 lg:px-0 lg:grid-cols-3"
          ref={containerRef}
        >
          {data.map((item, index) => (
            <div
              className="relative w-full h-auto px-10 pt-10 pb-20 border-2 border-teal-700 rounded-lg service-item"
              key={index}
              style={{ boxShadow: "5px 2px 3px rgba(0,0,0,0.2)" }}
            >
              <Image
                src={`/${item.icon}`}
                alt="service"
                width={100}
                height={100}
              />
              <h1 className="h-16 mt-3 text-xl font-medium lg:text-2xl">
                {item.title}
              </h1>
              <p className="mt-3 mb-5 text-base text-neutral-600 line-clamp-3 ">
                {item.description}
              </p>

              <Link
                href={`/services/${item.slug}`}
                className="absolute bottom-5 w-fit h-fit"
              >
                <div className="relative px-6 py-3 mt-10 font-bold text-white group w-fit ">
                  <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-teal-700 bg-opacity-90 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                  <span className="relative">Learn More</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
