import React, { useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import RoundedIconBtn from "./RoundedIconBtn";
import Label from "./Label";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  addToWishList,
  removeFromWishList,
} from "../store/userSlice";
import { toast } from "react-toastify";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

const Card = ({
  isRemove,
  item,
  label,
  image,
  title,
  price,
  oldPrice,
  stars,
  reviews,
  id,
}) => {
  const cardRef = useRef();
  const dispatch = useDispatch();
  const toggleCartVisibility = useCallback(() => {
    cardRef.current.classList.toggle("hidden");
  }, []);

  const cardVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.5,
      },
    },
  };
  const user = useSelector((state) => state.user);
  const updateUserData = async (uid, newData) => {
    try {
      const userDocRef = doc(db, "users", uid);
      await updateDoc(userDocRef, newData);
      console.log("Document updated successfully");
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };
  // if (userInfo && userInfo.id) {
  //   updateUserData(userInfo.id, {
  //     cart: [...userInfo.user.cart],
  //     wishList: [...userInfo.user.wishList],
  //     orders: userInfo.user.orders || [],
  //     email: userInfo.user.email || "",
  //     id: userInfo.user.id,
  //     name: userInfo.user.name || "",
  //   });
  // }
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      className="relative w-[250px] min-h-[370px] px-1"
      onClick={toggleCartVisibility}
    >
      <div className="absolute end-3 top-5 flex flex-col gap-4 z-50">
        {isRemove ? (
          <RoundedIconBtn
            bg={"white"}
            icon={"trash-can"}
            size={"lg"}
            color={"#000000"}
            aria-label="remove wishlist"
            handleClick={() => {
              dispatch(removeFromWishList({ item: item }));
              toast.success("item removed from wishList");
            }}
          />
        ) : (
          <RoundedIconBtn
            bg={"white"}
            icon={"heart"}
            size={"lg"}
            color={"#000000"}
            aria-label="Add to wishlist"
            handleClick={() => {
              dispatch(addToWishList({ item: item }));
              toast.success("item added to wishList");
            }}
          />
        )}
        <Link to={`/productDetails/${id}`}>
          <RoundedIconBtn
            bg={"white"}
            icon={"eye"}
            size={"lg"}
            color={"#000000"}
            aria-label="View product details"
            handleClick={() => {}}
          />
        </Link>
      </div>

      {label && <Label text={label} bg={"[#00FF66]"} />}

      <div className="flex flex-col justify-between gap-1 cursor-pointer">
        <div className="bg-[#F5F5F5] w-full h-[270px] flex items-center justify-center relative">
          <img
            src={image}
            alt={title}
            className="object-contain w-52 h-52"
            loading="lazy"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="bg-black text-white w-full p-2 absolute bottom-0 cursor-pointer hidden"
            ref={cardRef}
            onClick={() => {
              dispatch(addToCart({ item: { ...item, quantity: 1 } }));
              toast.success("item added to cart");
            }}
          >
            Add to cart
          </motion.div>
        </div>

        <p className="font-bold capitalize line-clamp-2">{title}</p>

        <div>
          <span className="text-red-600 font-bold mr-2">{price}</span>
          {oldPrice && (
            <span className="line-through text-gray-500 font-semibold">
              ${Math.round(Number(oldPrice))}
            </span>
          )}
        </div>

        <div>
          {stars.map((_, index) =>
            _ ? (
              <i
                key={index}
                className="fa-solid fa-star"
                style={{ color: "#FFD43B" }}
                aria-hidden="true"
              />
            ) : (
              <i
                key={index}
                className="fa-solid fa-star"
                style={{ color: "gray" }}
                aria-hidden="true"
              />
            )
          )}
          <span className="ml-2 text-gray-500 font-semibold">({reviews})</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
