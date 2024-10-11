import React from "react";

const SectionHead = (props) => {
  return (
    <div className="text-black flex items-center gap-3">
      <span className="inline-block bg-black w-3 h-14 rounded-lg"></span>
      <p className="capitalize font-bold">{props.title}</p>
    </div>
  );
};

export default SectionHead;
