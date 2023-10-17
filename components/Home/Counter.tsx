import React from "react";
import CountUpComponent from "../Count";

interface CountProps {
  counter: Counter[];
}

interface Counter {
  id: string;
  title: string;
  value: number;
  order: number;
  status: string;
  createdAt: string;
  updatedAt: string;
}

const Counter: React.FC<CountProps> = ({ counter }) => {
  return (
    <div className="hidden w-full h-56  lg:block lg:mt-10">
      <div className="grid grid-cols-1 gap-4 mx-auto max-w-7xl lg:grid-cols-4">
        {counter &&
          counter
            .sort((a: any, b: any) => a.order - b.order)
            .map((item: any) => (
              <div
                key={item.title}
                className="flex flex-col items-center justify-center w-full h-auto py-10 space-y-5 bg-white border-2 border-teal-600 rounded-md bg-opacity-90"
              >
                <CountUpComponent end={item.value} />
                <h1 className="text-2xl font-medium tracking-wide">
                  {item.title}
                </h1>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Counter;
