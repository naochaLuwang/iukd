"use client";
import React, { useEffect, useRef } from "react";
import CountUp from "react-countup";

interface CountUpComponentProps {
  end: number;
}

const CountUpComponent: React.FC<CountUpComponentProps> = ({ end }) => {
  const countRef = useRef<any>(null);

  useEffect(() => {
    if (countRef.current) {
      countRef.current.start();
    }
  }, []);

  return (
    <div className="text-2xl font-medium text-teal-500 lg:text-5xl">
      <CountUp start={0} end={end} duration={5} ref={countRef} />
    </div>
  );
};

export default CountUpComponent;
