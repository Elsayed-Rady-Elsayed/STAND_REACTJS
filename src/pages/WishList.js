import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import Card from "../components/Card";
import coat from "../assets/coat.png";
import { useDispatch, useSelector } from "react-redux";

const WishList = () => {
  const WishList = useSelector((state) => state.cart.wishList);
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  return (
    <div className="md:py-5 md:w-[90%] m-auto">
      <div className="header flex justify-between ">
        <span>
          Wishlist <span>({WishList.length})</span>
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mt-5">
        {WishList.map((el) => {
          let stars = [];
          const rating = el.rating?.rate ?? 0;
          for (let index = 0; index < 5; index++) {
            index < Math.round(Number(rating)) ? stars.push(1) : stars.push(0);
          }
          return (
            <Card
              isRemove={true}
              id={el.id}
              image={el.image}
              item={el}
              title={el.title}
              price={`$${el.price}`}
              oldPrice={`${el.price}`}
              stars={stars}
              reviews={el.rating.count}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WishList;
