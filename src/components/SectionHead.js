import React from "react";

const SectionHead = (props) => {
  return (
    <div className="text-red-600 flex items-center gap-3">
      <span className="inline-block bg-red-500 w-8 h-16 rounded-lg"></span>
      <p className="capitalize font-bold">{props.title}</p>
    </div>
  );
};

export default SectionHead;
