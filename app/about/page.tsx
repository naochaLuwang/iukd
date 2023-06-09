import Banner from "@/components/Banner";
import React from "react";
import DoctorCarousal from "../../components/DoctorCarousal";

const doctors = [
  {
    imageUrl: "/services/dranup.jpeg",
    name: "Dr. Arup Kumar Nath",
    department: "UROLOGY",
  },
  {
    imageUrl: "/services/debojit.jpeg",
    name: "Dr. Debojit Baishya",
    department: "UROLOGY",
  },
  {
    imageUrl: "/services/dranup.jpeg",
    name: "Dr. Arup Kumar Nath",
    department: "UROLOGY",
  },
  {
    imageUrl: "/services/dutta.jpeg",
    name: "Dr. Anup Dutta Baruah",
    department: "UROLOGY",
  },
];

const AboutPage = () => {
  return (
    <div className="w-full h-auto">
      <Banner title="About Us" sublink="About Us" />
      <div className="flex flex-col h-auto px-6 py-10 mx-auto max-w-7xl lg:px-0">
        <div className="flex flex-col items-center justify-center w-full ">
          <h1 className="text-lg font-medium lg:text-2xl">IUKD</h1>
          <p className="text-sm lg:text-base text-neutral-900">
            Institute Of Urology And Kidney Diseases
          </p>
        </div>
        <p className="mt-5 text-sm leading-loose text-justify lg:text-base">
          We are a Centre for Advanced Urology & Kidney Diseases is the only
          centre in entire North-Eastern Region of India dedicated only for
          Urological Problems. With the use of Most Advanced Laser Machines and
          all the Urological procedures we provide the best possible Urology
          Care for Kidney Stones, Prostate Enlargement Problems in elderly male,
          Kidney and Prostate Cancer, Male sexual problems, Female Urinary
          problems, Emergency Urology Services. Supported by two Urologist,
          Nephrologists, Cardiologist, Medicine Specialist, General Surgeon and
          20 well trained Urology staffs
        </p>

        <div className="flex flex-col items-center justify-center w-full mt-14">
          <h1 className="text-lg font-medium lg:text-2xl">OUR MISSION</h1>
        </div>
        <p className="mt-5 text-sm leading-loose text-justify lg:text-base">
          To establish a premier institute in Nephrology and Urology and be
          obliged to provide our patients with the highest level of excellence
          in healthcare. This we would achieve by enabling expertise,
          specialization and devotion at all levels of our faculty – doctors,
          nurses, paramedical and support staff.
        </p>

        <div className="flex flex-col items-center justify-center w-full mt-14">
          <h1 className="text-lg font-medium lg:text-2xl ">OUR VISION</h1>
        </div>
        <p className="mt-5 text-sm leading-loose text-justify lg:text-base ">
          We will constantly strive to encourage and promote medical learning
          through the best possible academic experiences for our fellow
          employees and associates ensuring career growth and advances. And for
          the community we serve, we will provide them with the newest advances
          in the promotion of good health and improved day-to-day lifestyles.!
        </p>

        <div className="flex flex-col items-center justify-center w-full mt-14">
          <h1 className="text-lg font-medium lg:text-2xl">OUR CORE TEAM</h1>
        </div>

        <div>
          <DoctorCarousal doctors={doctors} />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
