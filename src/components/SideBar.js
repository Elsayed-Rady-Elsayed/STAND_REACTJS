import React from "react";
import { Select } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="text-start p-5 flex flex-col justify-between border-e h-full">
      <select className="w-full focus:border-0 focus:outline-0 text-lg font-semibold">
        <option value="" key="" disabled className="">
          women's fashion
        </option>
        <option value="" key="">
          jeans
        </option>
        <option value="" key="">
          pluse
        </option>
        <option value="" key="">
          skirt
        </option>
      </select>
      <select className="w-full focus:border-0 focus:outline-0 text-lg font-semibold">
        <option value="" key="" disabled className="">
          men's fashion
        </option>
        <option value="" key="">
          jeans
        </option>
        <option value="" key="">
          T-shirt
        </option>
        <option value="" key="">
          hoodie
        </option>
      </select>
      <Link to={""} className="text-lg font-semibold">
        Electronics
      </Link>
      <Link to={""} className="text-lg font-semibold">
        Home & Lifestyle
      </Link>
      <Link to={""} className="text-lg font-semibold">
        Medicine
      </Link>
      <Link to={""} className="text-lg font-semibold">
        Sports & Outdoor
      </Link>
      <Link to={""} className="text-lg font-semibold">
        Baby's & Toys
      </Link>
      <Link to={""} className="text-lg font-semibold">
        Groceries & pets
      </Link>
      <Link to={""} className="text-lg font-semibold">
        Health & Beauty
      </Link>
    </div>
  );
};

export default SideBar;
