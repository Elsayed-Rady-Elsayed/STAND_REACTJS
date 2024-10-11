import React from "react";
import { Link } from "react-router-dom";
import elipse from "../assets/Ellipse.png";

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
    <div className="min-w-[40px] h-[40px] md:w-16 md:h-16 bg-white text-black rounded-full flex flex-col items-center justify-center font-semibold md:text-sm text-xs ">
      <p>{value}</p>
      <p>{label}</p>
    </div>
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
            <TimeBox value={minutes} label="min" />
            <TimeBox value={seconds} label="sec" />
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
