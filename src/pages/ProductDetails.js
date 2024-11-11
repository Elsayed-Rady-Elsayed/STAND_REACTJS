import React, { useEffect, useState } from "react";
import coat from "../assets/coat.png";
import { Button, Stack } from "@chakra-ui/react";
import Card from "../components/Card";
import SectionHead from "../components/SectionHead";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../store/productSlice";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { addToWishList, updateUserInfoCartAndList } from "../store/userSlice";
const ProductDetails = () => {
  window.scrollTo(0, 0);
  const { singleProducts, loading, error } = useSelector(
    (state) => state.product
  );
  const userInfo = useSelector((state) => state.user);

  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const params = useParams();
  const nav = useNavigate();
  useEffect(() => {
    dispatch(fetchProductById(params.id));
  }, []);
  let stars = [];
  const rating = singleProducts.rating?.rate ?? 0;
  for (let index = 0; index < 5; index++) {
    index < Math.round(Number(rating)) ? stars.push(1) : stars.push(0);
  }
  const handleChangeDataToWishList = (item, isRemove) => {
    let list = [...userInfo.wishList];
    if (isRemove) {
      const index = list.findIndex((product) => product.id === item.id);
      if (index !== -1) list.splice(index, 1);
    }
    dispatch(
      updateUserInfoCartAndList({
        uid: window.localStorage.getItem("uid"),
        newData: {
          cart: userInfo.cart,
          wishList: isRemove ? list : [...userInfo.wishList, item],
          orders: userInfo.user.orders,
          email: userInfo.user.email,
          id: userInfo.user.id,
          name: userInfo.user.name,
        },
      })
    );
  };
  return (
    <div className="md:w-[90%] m-auto text-start my-10 md:p-0 p-4">
      <p className="mb-10">
        Account / {singleProducts.category} / {singleProducts.title}
      </p>
      <div className="flex gap-10 md:flex-row flex-col md:mb-10 mb-5">
        <div className="flex gap-5 md:w-[50%] w-full h-fit ">
          <div className="flex flex-col gap-2 w-[20%]">
            <img
              className="bg-[#f5f5f5] p-2"
              src={singleProducts.image}
              alt=""
            />
            <img
              className="bg-[#f5f5f5] p-2"
              src={singleProducts.image}
              alt=""
            />
            <img
              className="bg-[#f5f5f5] p-2"
              src={singleProducts.image}
              alt=""
            />
            <img
              className="bg-[#f5f5f5] p-2"
              src={singleProducts.image}
              alt=""
            />
          </div>
          <div className="w-[80%]">
            <img
              src={singleProducts.image}
              className="h-full w-full bg-[#f5f5f5]"
              alt=""
            />
          </div>
        </div>
        <div className="md:w-[50%] w-full flex flex-col gap-3">
          <p className="font-bold text-2xl">{singleProducts.title}</p>
          <div className="flex gap-3 items-center">
            <div>
              {stars.map((el) => {
                return (
                  <i
                    className="fa-solid fa-star"
                    style={{
                      color: "#FFD43B",
                    }}
                  ></i>
                );
              })}
            </div>
            <p className="text-sm text-slate-400">
              ({singleProducts.rating?.count ?? 0} reviews)
            </p>
            <div className="h-full w-0.5 bg-slate-200"></div>
            <span className="text-green-500 font-bold">In Stock</span>
          </div>
          <p className="font-bold text-3xl">${singleProducts.price}</p>
          <p className="">{singleProducts.description}</p>
          <hr />
          <div className="flex items-center gap-2">
            <p className="font-semibold">Colours:</p>
            <span className="inline-block w-5 h-5 rounded-full bg-red-500 border border-black"></span>
            <span className="inline-block w-5 h-5 rounded-full bg-green-400"></span>
          </div>
          <div className="flex items-center gap-2">
            <p className="font-semibold">Size:</p>
            <span className="flex items-center justify-center w-8 h-8 rounded-md text-center border cursor-pointer">
              xs
            </span>
            <span className="flex items-center justify-center w-8 h-8 rounded-md text-center border cursor-pointer">
              s
            </span>
            <span className="flex items-center justify-center w-8 h-8 rounded-md text-center border cursor-pointer">
              m
            </span>
            <span className="flex items-center justify-center w-8 h-8 rounded-md text-center border cursor-pointer">
              l
            </span>
            <span className="flex items-center justify-center w-8 h-8 rounded-md text-center border cursor-pointer">
              xl
            </span>
          </div>
          <div className="flex justify-between gap-5 md:flex-row flex-col">
            <div className="flex items-center border w-fit">
              <span
                className="px-5 border-e text-xl cursor-pointer"
                onClick={() => {
                  count > 0 && setCount((prev) => prev - 1);
                }}
              >
                -
              </span>
              <span className="px-5 border-e text-xl">{count}</span>
              <span
                className="px-5 border-e text-xl cursor-pointer"
                onClick={() => {
                  setCount((prev) => prev + 1);
                }}
              >
                +
              </span>
            </div>
            <Button
              className=""
              colorScheme="red"
              width={"full"}
              onClick={() => {
                nav(`/Billing`, {
                  state: { product: { ...singleProducts, quantity: count } },
                });
              }}
            >
              Buy Now
            </Button>
            <span
              className="border flex items-center justify-center p-3 rounded-md w-fit cursor-pointer"
              onClick={() => {
                dispatch(addToWishList({ item: singleProducts }));
                toast.success("item added to wishList");
                handleChangeDataToWishList(singleProducts, false);
              }}
            >
              <i className="fa-regular fa-heart fa-lg"></i>
            </span>
          </div>
          <div className="border">
            <div className="p-2 flex items-center gap-4">
              <i
                className="fa-solid fa-truck-fast fa-lg"
                style={{ color: "#000000" }}
              ></i>
              <div>
                <p className="text-xl font-semibold">Free Delivery</p>
                <p className="text-sm">
                  enter your postal code for delivery availability
                </p>
              </div>
            </div>
            <hr />
            <div className="p-2 flex items-center gap-4">
              <i
                className="fa-solid fa-rotate-left fa-lg"
                style={{ color: "#000000" }}
              ></i>
              <div>
                <p className="text-xl font-semibold">Return Delivery</p>
                <p className="text-sm">free 30 days delivery return </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SectionHead title={"Related Item"} />

      <div className="flex flex-col md:flex-row gap-3 justify-between my-10">
        {[1, 2, 3, 4].map((el) => {
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

export default ProductDetails;
