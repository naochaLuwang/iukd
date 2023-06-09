"use client";

import React, { MouseEventHandler } from "react";

const CustomDot = ({ onClick, active }: any) => {
  const dotStyles = active
    ? "bg-blue-500 rounded-full h-4 w-4 mx-1"
    : "bg-gray-300 rounded-full h-4 w-4 mx-1";

  return <button className={dotStyles} onClick={onClick} />;
};

export default CustomDot;
