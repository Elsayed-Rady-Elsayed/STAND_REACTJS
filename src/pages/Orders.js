import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import { updateUserInfoCartAndList } from "../store/userSlice";

const Orders = () => {
  const orders = useSelector((state) => state.user);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleChangeDataToCart = (item) => {
    let list = [...user.user.orders];
    const index = list.findIndex((product) => product.id === item.id);
    if (index !== -1) list.splice(index, 1);
    console.log(list);

    dispatch(
      updateUserInfoCartAndList({
        uid: window.localStorage.getItem("uid"),
        newData: {
          cart: user.cart,
          wishList: user.wishList,
          orders: list,
          email: user.user.email,
          id: user.user.id,
          name: user.user.name,
        },
      })
    );
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };
  return (
    <div className="md:py-5 px-3 md:px-0 md:w-[90%] m-auto min-h-[40vh]">
      <div className="header flex justify-between ">
        <span>
          Orders <span>({orders.user.orders?.length})</span>
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-5">
        {orders.user.orders?.map((el, idx) => {
          let stars = [];
          const rating = el.rating?.rate ?? 0;
          for (let index = 0; index < 5; index++) {
            index < Math.round(Number(rating)) ? stars.push(1) : stars.push(0);
          }
          return (
            <div key={idx} className="flex items-center w-full gap-2">
              <img src={el.image} className="w-44 h-44 object-contain" alt="" />
              <div className="w-full text-start flex flex-col justify-between">
                <p>{el.title}</p>
                <p>{el.quantity} items</p>
                <p>${el.price * el.quantity}</p>
                <button
                  className="w-full bg-red-600 text-white p-2 rounded-md mt-2"
                  onClick={() => {
                    handleChangeDataToCart(el);
                  }}
                >
                  cancel order
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
