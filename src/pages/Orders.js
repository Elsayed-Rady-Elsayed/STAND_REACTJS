import React from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";

const Orders = () => {
  const orders = useSelector((state) => state.user);

  return (
    <div className="md:py-5 px-3 md:px-0 md:w-[90%] m-auto">
      <div className="header flex justify-between ">
        <span>
          Orders <span>({orders.user.orders?.length})</span>
        </span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-5">
        {orders.user.orders?.map((el, idx) => {
          let stars = [];
          const rating = el.rating?.rate ?? 0;
          for (let index = 0; index < 5; index++) {
            index < Math.round(Number(rating)) ? stars.push(1) : stars.push(0);
          }
          return (
            <div>
              <Card
                key={idx}
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
