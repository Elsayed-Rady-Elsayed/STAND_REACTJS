import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const { categories, loading, error } = useSelector((state) => state.category);
  return (
    <div className="text-start p-5 flex flex-col justify-start gap-3 border-e h-full">
      {!error &&
        !loading &&
        categories.map((el, idx) => {
          return (
            <Link
              key={idx}
              className="text-lg font-semibold capitalize"
              to={`/ShopAll/${el}`}
            >
              {el}
            </Link>
          );
        })}
    </div>
  );
};

export default SideBar;
