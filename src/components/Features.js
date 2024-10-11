import React from "react";

const Features = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <span className="bg-gray-200 w-20 h-20 rounded-full p-2">
        <div className="bg-black w-full h-full rounded-full flex items-center justify-center delivery for all orders over $140">
          <img src={ic1} className="" alt="" />
        </div>
      </span>
      <p className="font-bold">FREE AND FAST DELIVERY</p>
      <p>Free delivery for all orders over $140</p>
    </div>
  );
};

export default Features;
