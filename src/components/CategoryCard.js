import React from "react";

const CategoryCard = ({ image, title }) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-3 h-[200px] w-[200px] border me-7 rounded-md hover:bg-gray-100">
        <img src={image} alt="" className="" />
        <p className="text-lg capitalize">{title}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
