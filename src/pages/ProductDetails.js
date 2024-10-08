import React from "react";
import coat from "../assets/coat.png";
import { Button, Stack } from "@chakra-ui/react";
import Card from "../components/Card";
import SectionHead from "../components/SectionHead";
const ProductDetails = () => {
  window.scrollTo(0, 0);

  return (
    <div className="md:w-[90%] m-auto text-start my-10 md:p-0 p-4">
      <p className="mb-10">Account / Gaming / Havic HV G92 Gamepad</p>
      <div className="flex gap-10 md:flex-row flex-col md:mb-10 mb-5">
        <div className="flex gap-5 md:w-[50%] w-full h-fit ">
          <div className="flex flex-col gap-2 w-[20%]">
            <img className="bg-[#f5f5f5] p-2" src={coat} alt="" />
            <img className="bg-[#f5f5f5] p-2" src={coat} alt="" />
            <img className="bg-[#f5f5f5] p-2" src={coat} alt="" />
            <img className="bg-[#f5f5f5] p-2" src={coat} alt="" />
          </div>
          <div className="w-[80%]">
            <img src={coat} className="h-full w-full bg-[#f5f5f5]" alt="" />
          </div>
        </div>
        <div className="md:w-[50%] w-full flex flex-col gap-3">
          <p className="font-bold text-2xl">Havic HV G-92 Gamepad</p>
          <div className="flex gap-3 items-center">
            <div>
              {[1, 2, 5, 6].map((el) => {
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
            <p className="text-sm text-slate-400">(20 reviews)</p>
            <div className="h-full w-0.5 bg-slate-200"></div>
            <span className="text-green-500 font-bold">In Stock</span>
          </div>
          <p className="font-bold text-3xl">$192.00</p>
          <p className="">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </p>
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
              <span className="px-5 border-e text-xl cursor-pointer">-</span>
              <span className="px-5 border-e text-xl">2</span>
              <span className="px-5 border-e text-xl cursor-pointer">+</span>
            </div>
            <Button className="" colorScheme="red" width={"full"}>
              Buy Now
            </Button>
            <span className="border flex items-center justify-center p-3 rounded-md w-fit cursor-pointer">
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
