import React from "react";

const Button = ({ title, handleClick }) => {
  return (
    <button
      onClick={() => handleClick}
      className="bg-black text-white my-5 px-5 py-3 rounded-md"
    >
      {title}
    </button>
  );
};

export default Button;
