import React, { useRef } from "react";
import { motion } from "framer-motion";
const Card = (props) => {
  const cardRef = useRef();
  return (
    <div className="relative min-w-[270px] h-[370px] mx-2">
      <div className="absolute end-3 top-5 gap-4 flex flex-col z-50">
        <span className="bg-white w-10 h-10 flex items-center justify-center pt-1 rounded-full cursor-pointer">
          <i
            className="fa-regular fa-heart fa-lg"
            style={{
              color: "#000000",
            }}
          ></i>
        </span>
        <span className="bg-white w-10 h-10 flex items-center justify-center pt-1 rounded-full cursor-pointer">
          <i
            className="fa-regular fa-eye fa-lg"
            style={{
              color: "#000000",
            }}
          ></i>
        </span>
      </div>
      {props.label && (
        <span className="bg-[#00FF66] absolute start-3 top-3 rounded text-sm px-1 text-white capitalize">
          {props.label}
        </span>
      )}

      <div
        className="flex flex-col justify-between items-start gap-2"
        onClick={() => {
          cardRef.current.classList.toggle("hidden");
        }}
      >
        <div className="bg-[#F5F5F5] w-full h-[270px] flex items-center justify-center relative">
          <img className="" src={props.image} alt="" />
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            className="bg-black text-white w-full p-2 absolute bottom-0 cursor-pointer hidden"
            ref={cardRef}
          >
            add to cart
          </motion.div>
        </div>
        <p className="font-bold capitalize">{props.title}</p>
        <div>
          <span className="text-red-600 font-bold me-2">{props.price}</span>
          <span className="line-through text-gray-500 font-semibold ">
            {props.oldPrice}
          </span>
        </div>
        <div>
          {props.stars.map((el) => {
            return (
              <i
                className="fa-solid fa-star"
                style={{
                  color: "#FFD43B",
                }}
              ></i>
            );
          })}
          <span className="ms-2 text-gray-500 font-semibold">
            ({props.reviews})
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
