import React from "react";

const Timer = () => {
  return (
    <div className="flex items-start md:items-center mt-2 mb-5 gap-5 flex-col md:flex-row">
      <h3 className="text-2xl font-bold">Flash Sales</h3>
      <div className="timer flex items-center md:gap-2 gap-1">
        <div className="flex flex-col items-start">
          <span className="md:text-xs text-[9px] capitalize">Days</span>
          <span className="font-bold md:text-3xl text-lg">03</span>
        </div>
        <span className="text-red-600 text-2xl">:</span>
        <div className="flex flex-col items-start">
          <span className="md:text-xs text-[9px] capitalize">hours</span>
          <span className="font-bold md:text-3xl text-lg">03</span>
        </div>
        <span className="text-red-600 text-2xl">:</span>
        <div className="flex flex-col items-start">
          <span className="md:text-xs text-[9px] capitalize">minutes</span>
          <span className="font-bold md:text-3xl text-lg">03</span>
        </div>
        <span className="text-red-600 text-2xl">:</span>
        <div className="flex flex-col items-start">
          <span className="md:text-xs text-[9px] capitalize">seconds</span>
          <span className="font-bold md:text-3xl text-lg">03</span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
