import React, { useEffect } from "react";
import coat from "../assets/coat.png";
import Card from "../components/Card";
import { Select, Stack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";
const Shop = () => {
  window.scrollTo(0, 0);
  const product = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  console.log(product);

  return (
    <div className="text-start md:w-[90%] m-auto p-2 md:p-0 my-[2rem]">
      <p className="md:ps-2 font-bold text-2xl">Shop</p>
      <div className="flex my-5 md:ps-2 justify-between md:flex-row flex-col gap-3">
        <div className="flex items-center gap-3">
          <p>Filter:</p>{" "}
          <Select placeholder="Sort By">
            <option value="price low to high">price low to high</option>
            <option value="price high to low">price high to low</option>
            <option value="alphapeticaly a to z">alphapeticaly a to z</option>
            <option value="alphapeticaly z to a">alphapeticaly z to a</option>
            <option value="reviews">reviews</option>
          </Select>
        </div>
        <div>
          <Select placeholder="Category">
            <option value="phone">phone</option>
            <option value="fashion">fashion</option>
            <option value="men">men</option>
            <option value="women">women</option>
            <option value="computer">computer</option>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5">
        {product.map((el) => {
          let stars = [];
          const rating = el.rating?.rate ?? 0;
          for (let index = 0; index < 5; index++) {
            index < Math.round(Number(rating)) ? stars.push(1) : stars.push(0);
          }
          return (
            <Card
              image={el.image}
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

export default Shop;
