import React, { useEffect, useState } from "react";
import pcMonitor from "../assets/monitior.png";
import { Button, Input } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  changeItemCartQuantity,
  removeFromCart,
  updateUserInfoCartAndList,
} from "../store/userSlice";
const Cart = () => {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const user = useSelector((state) => state.user);

  const handleChangeDataToCart = (item, isRemove, isEdit) => {
    let list = [...user.cart];
    if (isRemove && !isEdit) {
      const index = list.findIndex((product) => product.id === item.id);
      if (index !== -1) list.splice(index, 1);
    }
    dispatch(
      updateUserInfoCartAndList({
        uid: window.localStorage.getItem("uid"),
        newData: {
          cart: isEdit
            ? [...user.cart]
            : isRemove
            ? list
            : [...user.cart, item],
          wishList: user.wishList,
          orders: user.user.orders,
          email: user.user.email,
          id: user.user.id,
          name: user.user.name,
        },
      })
    );
  };
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
          {user.cart?.map((el, idx) => {
            if (el.quantity === 0) {
              dispatch(removeFromCart({ item: el }));
              toast.success("item removed from cart");
            }
            return (
              <tr key={idx} className="shadow-sm h-16 md:text-md text-xs">
                <td className="flex items-center mt-4 relative ps-2 ">
                  <span
                    onClick={() => {
                      dispatch(
                        removeFromCart({
                          item: el,
                        })
                      );
                      handleChangeDataToCart(el, true, false);
                    }}
                    className="bg-red-500 absolute h-4 w-4 cursor-pointer rounded-full flex items-center justify-center text-white pb-1 -top-1 start-0"
                  >
                    x
                  </span>
                  <img src={el.image} className="w-8 h-10" alt="" />
                  <p className="md:text-sm md:ms-4 ms-1 md:text-md text-xs">
                    {el.title}
                  </p>
                </td>
                <td className="font-bold">${el.price * el.quantity}</td>
                <td className="">
                  <div className=" flex justify-center">
                    <div className="flex w-fit border md:p-2 p-1 rounded items-center justify-center gap-3 ">
                      <span className="md:text-xl text-xs">{el.quantity}</span>
                      <span className="text-xs ">
                        <div
                          onClick={() => {
                            setCount((prev) => prev + 1);
                            dispatch(
                              changeItemCartQuantity({
                                item: el,
                                quantity: el.quantity + 1,
                              })
                            );
                            handleChangeDataToCart(el, false, true);
                          }}
                        >
                          <i className="fa-solid fa-chevron-up"></i>
                        </div>
                        <div
                          onClick={() => {
                            if (el.quantity > 0) {
                              setCount((prev) => prev - 1);
                              dispatch(
                                changeItemCartQuantity({
                                  item: el,
                                  quantity: el.quantity - 1,
                                })
                              );
                              handleChangeDataToCart(el, false, true);
                            }
                          }}
                        >
                          <i className="fa-solid fa-chevron-down"></i>
                        </div>
                      </span>
                    </div>
                  </div>
                </td>
                <td className="font-bold">
                  ${Math.round(el.price * el.quantity + 22)}
                </td>
              </tr>
            );
          })}
        </table>
      </div>

      <div className="mt-10 flex justify-between gap-2"></div>
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
                <Button
                  colorScheme="red"
                  onClick={() => {
                    nav("/Billing", { state: { product: user.user.cart } });
                  }}
                >
                  process to checkout
                </Button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
