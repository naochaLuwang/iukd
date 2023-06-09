import React from "react";
import HomeCarousal from "../components/Home/Carousal";
import AboutUs from "@/components/Home/About";
import Service from "../components/Home/Service";
import Testimonial from "../components/Home/Testimonial";
import EmbedPage from "@/components/Home/EmbedPage";
import { getAllTestimonials } from "./actions/getAllTestimonial";
import Counter from "@/components/Home/Counter";
import CounterMobile from "@/components/Home/CounterMobile";
import { getAllCounters } from "./actions/getAllCounters";

export const metadata = {
  icons: {
    icon: "/favicon.png",
  },
  title: "IUKD",
};

const items = [
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

// const testimonials = [
//   {
//     testimony:
//       "They have been an angel in disguise for me. I'm feeling much better and hope to remain in good health. Thank you",
//     name: "Mahatma G",
//     place: "Guwahati",
//   },
//   {
//     testimony:
//       "I appreciate the efficiency and the competence of the doctors and the staff for the professional services we have received. Eventually we emerged victorious.",
//     name: "Lidia Das Gupta",
//     place: "Kolkata",
//   },
//   {
//     testimony:
//       "Excellent clinic in Guwahati. Doctors are professionally competent and staff very friendly. Acuurate and timely blood test. Highly recommend it.",
//     name: "Anjali Deka",
//     place: "Guwahati",
//   },
// ];

const HomePage = async () => {
  const testimonials = await getAllTestimonials();

  const counters = await getAllCounters();

  return (
    <main className="relative overflow-hidden">
      <HomeCarousal items={items} counters={counters} />
      <CounterMobile />
      <AboutUs />
      <Service />
      <Testimonial items={testimonials} />
      <EmbedPage />
    </main>
  );
};

export default HomePage;
