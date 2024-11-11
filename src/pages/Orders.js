import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import Card from "../components/Card";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { updateUserInfoCartAndList } from "../store/userSlice";

const Orders = () => {
  const orders = useSelector((state) => state.user);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleChangeDataToCart = (item) => {
    let list = [...user.user.orders];
    const index = list.findIndex((product) => product.id === item.id);
    if (index !== -1) list.splice(index, 1);

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
  };
  return (
    <div className="md:py-5 px-3 md:px-0 md:w-[90%] m-auto min-h-[40vh]">
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
                w={"40vw"}
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
              >
                <Image
                  objectFit="contain"
                  maxW={{ base: "100%", sm: "200px" }}
                  src={el.image}
                  alt="Caffe Latte"
                />

                <Stack>
                  <CardBody>
                    <Heading size="md">{el.title}</Heading>

                    <Text align={"start"} px="3" py="2">
                      ${el.price * el.quantity}
                    </Text>
                    <Text align={"start"} px="3" py="2">
                      {el.quantity} items
                    </Text>
                  </CardBody>

                  <CardFooter>
                    <button
                      className="bg-red-500 p-2 rounded-md text-white"
                      onClick={() => {
                        handleChangeDataToCart(el);
                        window.location.reload();
                      }}
                      variant="solid"
                      colorScheme="red"
                    >
                      delete order
                    </button>
                  </CardFooter>
                </Stack>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
