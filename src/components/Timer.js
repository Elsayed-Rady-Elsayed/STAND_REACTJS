import React, { useEffect, useState } from "react";

const Timer = () => {
  // const [date, setDate] = useState(new Date());
  // useEffect(() => {
  //   setDate(new Date());
  // }, [date]);

  return (
    <div className="flex items-start md:items-center mt-2 mb-5 gap-5 flex-col md:flex-row">
      <div className="timer flex items-center md:gap-2 gap-1">
        <div className="flex flex-col items-start">
          <span className="md:text-xs text-[9px] capitalize">Days</span>
          <span className="font-bold md:text-3xl text-lg">03</span>
        </div>
        <span className="text-black text-2xl">:</span>
        <div className="flex flex-col items-start">
          <span className="md:text-xs text-[9px] capitalize">hours</span>
          <span className="font-bold md:text-3xl text-lg">03</span>
        </div>
        <span className="text-black text-2xl">:</span>
        <div className="flex flex-col items-start">
          <span className="md:text-xs text-[9px] capitalize">minutes</span>
          <span className="font-bold md:text-3xl text-lg">03</span>
        </div>
        <span className="text-black text-2xl">:</span>
        <div className="flex flex-col items-start">
          <span className="md:text-xs text-[9px] capitalize">seconds</span>
          <span className="font-bold md:text-3xl text-lg">03</span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
