import React from "react";
import coat from "../assets/coat.png";
import Card from "../components/Card";
import { Select, Stack } from "@chakra-ui/react";
const Shop = () => {
  return (
    <div className="text-start md:w-[90%] m-auto p-2 md:p-0 my-[2rem]">
      <p className="md:ps-2 font-bold text-2xl">Shop</p>
      <div className="flex my-5 md:ps-2 justify-between md:flex-row flex-col">
        <div className="flex items-center gap-3">
          <p>Filter:</p>{" "}
          <Select placeholder="Sort By">
            <option value="option1">price low to high</option>
            <option value="option2">price high to low</option>
            <option value="option3">alphapeticaly a to z</option>
            <option value="option3">alphapeticaly z to a</option>
            <option value="option3">reviews</option>
          </Select>
        </div>
        <div>
          <Select placeholder="Category">
            <option value="option1">phone</option>
            <option value="option2">fashion</option>
            <option value="option3">men</option>
            <option value="option3">women</option>
            <option value="option3">computer</option>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5">
        {[1, 2, 2, 2, 2, 2, 2, 2].map((el) => {
          return (
            <Card
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

export default Shop;
