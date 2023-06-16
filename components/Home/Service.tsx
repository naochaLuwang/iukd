import React from "react";
import Image from "next/image";
import Link from "next/link";

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
            <Link href="/services/endo_urological_surgeries">
              <div className="flex flex-col items-center inner">
                <Image
                  src={"/services/iukd1.png"}
                  width={60}
                  height={60}
                  alt="service image"
                />
                <p className="text-sm">Endo Urological Surgeries</p>
              </div>
            </Link>
          </div>
          <div className="shadow-md box">
            <Link href="/services/laparoscopic_uro_surgeries">
              <div className="relative flex flex-col items-center inner">
                <Image
                  src={"/services/iukd6.png"}
                  width={60}
                  height={60}
                  alt="service image"
                />
                <p className="text-sm">Laparoscopic Uro Surgeries</p>
              </div>
            </Link>
          </div>
          <div className="shadow-md box">
            <Link href="/services/reconstructive_surgeries">
              <div className="flex flex-col items-center inner">
                <Image
                  src={"/services/iukd6.png"}
                  width={60}
                  height={60}
                  alt="service image"
                />
                <p className="text-sm">Reconstructive Surgeries</p>
              </div>
            </Link>
          </div>
          <div className="shadow-md box">
            <Link href="/services/urology_cancer_clinic">
              <div className="flex flex-col items-center inner">
                <Image
                  src={"/services/iukd2.png"}
                  width={60}
                  height={60}
                  alt="service image"
                />
                <p className="text-sm">Urology Cancer Clinic</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="content2 mt-[13px]">
          <div className="shadow-md box">
            <Link href="/services/male_female_urinary_problem">
              <div className="flex flex-col items-center inner">
                <Image
                  src={"/services/iukd3.png"}
                  width={60}
                  height={60}
                  alt="service image"
                />
                <p className="text-sm">Male & Female Urinary Problem</p>
              </div>
            </Link>
          </div>
          <div className="shadow-md box">
            <Link href="/services/male_fertility_sexual_problem">
              <div className="flex flex-col items-center inner">
                <Image
                  src={"/services/iukd4.png"}
                  width={60}
                  height={60}
                  alt="service image"
                />
                <p className="text-sm">Male Infertility & Sexual Problem</p>
              </div>
            </Link>
          </div>
          <div className="shadow-md box">
            <div className="flex flex-col items-center inner">
              <Image
                src={"/services/iukd5.png"}
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
