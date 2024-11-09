import React, { useEffect, useState } from "react";
import { useTimer } from "react-timer-hook";

const Timer = ({ expiryTimestamp }) => {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });
  return (
    <div className="flex items-start md:items-center mt-2 mb-5 gap-5 flex-col md:flex-row">
      <div className="timer flex items-center md:gap-2 gap-1">
        <div className="flex flex-col items-start">
          <span className="md:text-xs text-[9px] capitalize">Days</span>
          <span className="font-bold md:text-3xl text-lg">{days}</span>
        </div>
        <span className="text-black text-2xl">:</span>
        <div className="flex flex-col items-start">
          <span className="md:text-xs text-[9px] capitalize">hours</span>
          <span className="font-bold md:text-3xl text-lg">{hours}</span>
        </div>
        <span className="text-black text-2xl">:</span>
        <div className="flex flex-col items-start">
          <span className="md:text-xs text-[9px] capitalize">minutes</span>
          <span className="font-bold md:text-3xl text-lg">{minutes}</span>
        </div>
        <span className="text-black text-2xl">:</span>
        <div className="flex flex-col items-start">
          <span className="md:text-xs text-[9px] capitalize">seconds</span>
          <span className="font-bold md:text-3xl text-lg">{seconds}</span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
