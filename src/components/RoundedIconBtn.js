import React from "react";

const RoundedIconBtn = ({ color, icon, size, bg, handleClick }) => {
  return (
    <span
      onClick={() => {
        handleClick();
      }}
      className={`bg-${bg} w-10 h-10 flex items-center justify-center rounded-full cursor-pointer`}
    >
      <i
        className={`fa-regular fa-${icon} fa-${size}`}
        style={{ color: color }}
      />
    </span>
  );
};

export default RoundedIconBtn;
