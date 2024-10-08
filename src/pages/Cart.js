import React from "react";
import pcMonitor from "../assets/monitior.png";
import { Button, Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Cart = () => {
  return (
    <div className="md:w-[80%] px-2 m-auto md:py-10">
      <div className="text-start">
        <span className="text-gray-400">Home</span> / Cart
      </div>
      <div className="">
        <table className="mt-5 w-full border-collapse ">
          <tr key="" className="shadow-sm h-16 md:text-md text-sm">
            <td className="text-start">products</td>
            <td>price</td>
            <td>quantitiy</td>
            <td>subtotal</td>
          </tr>
          <tr key="" className="shadow-sm h-16 md:text-md text-xs">
            <td className="flex items-center mt-4 relative ps-2 ">
              <span className="bg-red-500 absolute h-4 w-4 cursor-pointer rounded-full flex items-center justify-center text-white pb-1 -top-1 start-0">
                x
              </span>
              <img src={pcMonitor} alt="" />
              <p className="md:text-sm md:ms-4 ms-1 md:text-md text-xs">
                Lcd Monitior
              </p>
            </td>
            <td className="font-bold">$650</td>
            <td className="">
              <div className=" flex justify-center">
                <div className="flex w-fit border md:p-2 p-1 rounded items-center justify-center gap-3 ">
                  <span className="md:text-xl text-xs">01</span>
                  <span className="text-xs ">
                    <div>
                      <i className="fa-solid fa-chevron-up"></i>
                    </div>
                    <div>
                      <i className="fa-solid fa-chevron-down"></i>
                    </div>
                  </span>
                </div>
              </div>
            </td>
            <td className="font-bold">$650</td>
          </tr>
        </table>
      </div>

      <div className="mt-10 flex justify-between gap-2">
        <Button variant="outline">Return To Shop</Button>
        <Button variant="outline">Update Cart</Button>
      </div>
      <div className="mt-10 flex justify-between gap-10 md:flex-row flex-col">
        <div className="flex gap-2 md:w-[50%] w-full">
          <Input placeholder="Coupon Code" />
          <Button className="" colorScheme="red" width={"200px"}>
            Apply Coupon
          </Button>
        </div>
        <div className="md:w-[38%] w-full border border-black rounded-md p-4">
          <table className="w-full text-start border-collapse">
            <tr key="" className="font-semibold text-2xl ">
              <td colSpan="2" className="pb-3">
                cart total
              </td>
            </tr>
            <tr key="" className="border-b table-responsive w-full">
              <td className="py-3">subtotal:</td>
              <td className="text-end py-3">$1650</td>
            </tr>
            <tr key="" className="border-b">
              <td className="py-3">shipping:</td>
              <td className="text-end py-3">$1650</td>
            </tr>
            <tr key="">
              <td className="py-3">total:</td>
              <td className="text-end py-3">$1650</td>
            </tr>
            <tr key="">
              <td colSpan="2" className="text-center py-3">
                <Link to={"/Billing"}>
                  {" "}
                  <Button colorScheme="red">process to checkout</Button>
                </Link>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
