import { Button } from "@chakra-ui/react";
import React from "react";
import Card from "../components/Card";
import coat from "../assets/coat.png";

const WishList = () => {
  return (
    <div className="md:py-5 md:w-[90%] m-auto">
      <div className="header flex justify-between ">
        <span>
          Wishlist <span>(5)</span>
        </span>
        <Button variant="outline">Move All To Bag</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mt-5">
        {[1, 2, 3, 4].map((el) => {
          return (
            <Card
              isRemove={true}
              image={coat}
              title="the north coat"
              price={`$${260}`}
              oldPrice={`$${350}`}
              stars={[1, 2, 3]}
              reviews={22}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WishList;
