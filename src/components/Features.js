import React from "react";

const FeaturesSection = ({ img, title, subTitle }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <span className="bg-gray-200 w-20 h-20 rounded-full p-2">
        <div className="bg-black w-full h-full rounded-full flex items-center justify-center delivery for all orders over $140">
          <img src={img} className="" alt="" />
        </div>
      </span>
      <p className="font-bold">{title}</p>
      <p>{subTitle}</p>
    </div>
  );
};

export default FeaturesSection;
