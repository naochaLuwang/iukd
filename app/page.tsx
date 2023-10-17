import React from "react";
import HomeCarousal from "../components/Home/Carousal";
import AboutUs from "@/components/Home/About";

import EmbedPage from "@/components/Home/EmbedPage";

import CounterMobile from "@/components/Home/CounterMobile";

import Services from "../components/Home/Services";
import client from "@/lib/prismadb";
import Counter from "@/components/Home/Counter";

export const metadata = {
  icons: {
    icon: "/favicon.png",
  },
  title: "IUKD",
};

type CarouselItem = {
  imageUrl: string;
  // title: string;
  // description: string;
};

const items: CarouselItem[] = [
  {
    imageUrl: "slider5.jpeg",
  },
];

const HomePage = async () => {
  const counters: any = await client.counters.findMany({
    where: {
      status: "ACTIVE",
    },
  });

  return (
    <main className="relative overflow-hidden">
      <HomeCarousal items={items} counters={counters} />
      <Counter counter={counters} />
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
