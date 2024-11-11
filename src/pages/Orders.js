import React from "react";
import { useSelector } from "react-redux";
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
              <Card maxW="sm">
                <CardBody>
                  <Image
                    src={el.image}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="sm">{el.title}</Heading>
                    <Text color="blue.600" fontSize="2xl">
                      {el.quantity} items = ${el.price * el.quantity}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button variant="solid" colorScheme="red">
                      delete order
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
