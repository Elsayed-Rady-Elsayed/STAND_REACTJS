import React from "react";
import { Link } from "react-router-dom";

const Advertisement = ({
  title,
  subtitle,
  img,
  days,
  hours,
  minutes,
  seconds,
}) => {
  const TimeBox = ({ value, label }) => (
    <span className="w-16 h-16 bg-white text-black rounded-full flex flex-col items-center justify-center font-semibold text-sm">
      <p>{value}</p>
      <p>{label}</p>
    </span>
  );

  return (
    <article className="w-full h-full bg-black flex items-start justify-between p-5 text-white md:flex-row flex-col-reverse">
      <div className="mt-10 w-full md:w-[50%] md:ms-10 text-start">
        <div>
          <span className="text-lg text-[#00FF66]">{title}</span>
        </div>
        <div className="text-start">
          <p className="font-bold text-5xl md:text-6xl text-start">
            {subtitle}
          </p>
          <div className="flex gap-5 my-5">
            <TimeBox value={days} label="days" />
            <TimeBox value={hours} label="hours" />
            <TimeBox value={minutes} label="minutes" />
            <TimeBox value={seconds} label="seconds" />
          </div>
          <Link
            to="/ShopAll"
            className="inline-block mt-5 bg-[#00FF66] px-7 py-4 rounded-md"
          >
            <span>Shop Now</span>
          </Link>
        </div>
      </div>

      <div className="mt-5 relative">
        <img
          src={elipse}
          className="absolute w-full h-[100%] z-20"
          alt="Background ellipse"
        />
        <img src={img} className="relative z-20" alt="Advertisement visual" />
      </div>
    </article>
  );
};

export default Advertisement;
