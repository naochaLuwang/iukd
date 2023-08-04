import React from "react";
import HomeCarousal from "../components/Home/Carousal";
import AboutUs from "@/components/Home/About";

import EmbedPage from "@/components/Home/EmbedPage";

import CounterMobile from "@/components/Home/CounterMobile";
import { getAllCounters } from "./actions/getAllCounters";
import Services from "../components/Home/Services";

export const metadata = {
  icons: {
    icon: "/favicon.png",
  },
  title: "IUKD",
};

type CarouselItem = {
  imageUrl: string;
  title: string;
  description: string;
};

const items: CarouselItem[] = [
  {
    imageUrl: "slider3.jpg",
    title: "Center for Advance Urology & Kidney Diseases",
    description:
      "Center for Advanced Urology & Kidney Diseases is the only centre in entire North Eastern Region of India.",
  },
  {
    imageUrl: "slider4.jpg",
    title: "Center for Advance Urology & Kidney Diseases",
    description:
      "Center for Advanced Urology & Kidney Diseases is the only centre in entire North Eastern Region of India.",
  },
];

const HomePage = async () => {
  const counters = await getAllCounters();

  return (
    <main className="relative overflow-hidden">
      <HomeCarousal items={items} counters={counters} />
      <CounterMobile />
      <AboutUs />
      {/* <Service /> */}
      <Services />

      <EmbedPage />
    </main>
  );
};

export default HomePage;

export const revalidate = 0;
