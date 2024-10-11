import React from "react";
import { motion } from "framer-motion";
const CategoryCard = ({ image, title }) => {
  const cardVarients = {
    hidden: {
      opacity: 0,
    },
    vissible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 1,
      },
    },
  };
  return (
    <motion.div
      variants={cardVarients}
      initial="hidden"
      whileInView="vissible"
      className="flex flex-col items-center justify-center gap-3 h-[200px] w-[200px] border me-7 rounded-md hover:bg-gray-100"
    >
      <img src={image} alt="" className="" />
      <p className="text-lg capitalize">{title}</p>
    </motion.div>
  );
};

export default CategoryCard;
