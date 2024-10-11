import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import RoundedIconBtn from "./RoundedIconBtn";
import Label from "./Label";

const Card = ({
  isRemove,
  label,
  image,
  title,
  price,
  oldPrice,
  stars,
  reviews,
}) => {
  const cardRef = useRef();

  const toggleCartVisibility = () => {
    cardRef.current.classList.toggle("hidden");
  };

  return (
    <div className="relative min-w-[270px] h-[370px] mx-2">
      <div className="absolute end-3 top-5 flex flex-col gap-4 z-50">
        <RoundedIconBtn
          bg={"white"}
          icon={"heart"}
          size={"lg"}
          color={"#000000"}
          handleClick={() => {}}
        />
        <Link to="productDetails">
          <RoundedIconBtn
            bg={"white"}
            icon={"eye"}
            size={"lg"}
            color={"#000000"}
            handleClick={() => {}}
          />
        </Link>
      </div>
      {label && <Label text={label} bg={"[#00FF66]"} />}
      <div
        className="flex flex-col justify-between gap-2"
        onClick={toggleCartVisibility}
      >
        <div className="bg-[#F5F5F5] w-full h-[270px] flex items-center justify-center relative">
          <img src={image} alt={title} className="object-contain" />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-black text-white w-full p-2 absolute bottom-0 cursor-pointer hidden"
            ref={cardRef}
          >
            Add to cart
          </motion.div>
        </div>
        <p className="font-bold capitalize">{title}</p>
        <div>
          <span className="text-red-600 font-bold mr-2">{price}</span>
          {oldPrice && (
            <span className="line-through text-gray-500 font-semibold">
              {oldPrice}
            </span>
          )}
        </div>
        <div>
          {stars.map((_, index) => (
            <i
              key={index}
              className="fa-solid fa-star"
              style={{ color: "#FFD43B" }}
            />
          ))}
          <span className="ml-2 text-gray-500 font-semibold">({reviews})</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
