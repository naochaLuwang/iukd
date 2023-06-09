import React from "react";
import CountUpComponent from "../Count";

const counters = [
  {
    title: "Consultants",
    value: 35,
  },
  {
    title: "Years of Experience",
    value: 5,
  },
  {
    title: "Services",
    value: 20,
  },
  {
    title: "Supporting Staff",
    value: 1000,
  },
];

const CounterMobile = () => {
  return (
    <div className="block w-full h-auto px-4 py-10 lg:hidden">
      <div className="grid w-full grid-cols-2 gap-2">
        {counters.map((counter, index: any) => (
          <div
            className="flex flex-col items-center justify-center w-full h-auto px-3 py-5 space-y-2 bg-white border-2 border-teal-600 rounded-md bg-opacity-90"
            key={index}
          >
            <CountUpComponent end={counter.value} />
            <h1 className="text-lg font-medium tracking-wide text-center">
              {counter.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CounterMobile;
