import {
  Box,
  Button,
  Checkbox,
  Input,
  Radio,
  RadioGroup,
  Stack,
  StackDivider,
  VStack,
} from "@chakra-ui/react";
import { Target } from "lucide-react";
import React, { useEffect, useState } from "react";
import monitor from "../assets/monitior.png";
import { useLocation, useParams } from "react-router-dom";
const Billing = () => {
  const [userBillState, setUserBillState] = useState({
    FirstName: "",
    LastName: "",
    StreetAddress: "",
    Appartment: "",
    Town: "",
    PhoneNumber: "",
    EmailAddress: "",
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const setTheBillingData = (evt) => {
    const { name, value } = evt.target;
    setUserBillState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const location = useLocation();
  const product = location.state.product;
  useEffect(() => {
    if (Array.isArray(product)) {
      setTotalPrice(
        product.reduce((total, num) => {
          return total.price + num.price * num.quantity;
        })
      );
    }
  }, []);

  return (
    <div className="text-start md:w-[90%] w-full p-2 md:p-5 m-auto mt-10">
      <h3 className="text-3xl font-bold">billing detail</h3>
      <div className="flex justify-between md:flex-row flex-col">
        <div className="text-start">
          <form
            className=" mt-10 flex flex-col gap-4"
            action=""
            onSubmit={(event) => {
              event.preventDefault();
              const formData = new FormData(event.target);
              const data = new Object.fromEntries(formData.entries());
            }}
          >
            <div>
              <label htmlFor="" className="text-xs capitalize">
                first name <span className="text-red-600">*</span>
              </label>
              <Input
                required
                bg={"#F5F5F5"}
                value={userBillState.FirstName}
                onChange={(evt) => {
                  setTheBillingData(evt);
                }}
                name="FirstName"
              />
            </div>
            <div>
              <label htmlFor="" className="text-xs capitalize">
                Last Name <span className="text-red-600">*</span>
              </label>
              <Input
                required
                bg={"#F5F5F5"}
                value={userBillState.LastName}
                onChange={(evt) => {
                  setTheBillingData(evt);
                }}
                name="LastName"
              />
            </div>
            <div>
              <label htmlFor="" className="text-xs capitalize">
                Town / city <span className="text-red-600">*</span>
              </label>
              <Input
                required
                bg={"#F5F5F5"}
                value={userBillState.StreetAddress}
                onChange={(evt) => {
                  setTheBillingData(evt);
                }}
                name="Town"
              />
            </div>
            <div>
              <label htmlFor="" className="text-xs capitalize">
                Appartment <span className="text-red-600">*</span>
              </label>
              <Input
                required
                bg={"#F5F5F5"}
                value={userBillState.Appartment}
                onChange={(evt) => {
                  setTheBillingData(evt);
                }}
                name="Appartment"
              />
            </div>
            <div>
              <label htmlFor="" className="text-xs capitalize">
                Email Address <span className="text-red-600">*</span>
              </label>
              <Input
                name="email"
                required
                bg={"#F5F5F5"}
                value={userBillState.EmailAddress}
                onChange={(evt) => {
                  setTheBillingData(evt);
                }}
              />
            </div>
            <div>
              <label htmlFor="" className="text-xs capitalize">
                phone number <span className="text-red-600">*</span>
              </label>
              <Input
                name="phone"
                required
                bg={"#F5F5F5"}
                value={userBillState.PhoneNumber}
                onChange={(evt) => {
                  setTheBillingData(evt);
                }}
              />
            </div>
            <Stack className="" spacing={5} direction="row">
              <Checkbox colorScheme="red" className="text-sm" defaultChecked>
                Save this information for faster check-out next time
              </Checkbox>
            </Stack>
            <button
              type="submit"
              className="bg-red-500 text-white p-2 rounded-md"
              colorScheme="red"
              width={"200px"}
            >
              place order
            </button>
          </form>
        </div>
        <div className="mt-10 md:w-[450px]">
          <VStack
            divider={<StackDivider borderColor="gray.200" />}
            spacing={4}
            align="stretch"
          >
            {Array.isArray(product) ? (
              product.map((el, idx) => {
                return (
                  <Box
                    key={idx}
                    bg=""
                    className="flex justify-between gap-10 items-center"
                  >
                    <div className="flex gap-3 items-center h-10">
                      <img src={el.image} alt="" className="h-full" />
                      <p>{el.title}</p>
                    </div>
                    <p>${el.price * el.quantity}</p>
                  </Box>
                );
              })
            ) : (
              <Box bg="" className="flex justify-between gap-10 items-center">
                <div className="flex gap-3 items-center h-10">
                  <img src={product.image} alt="" className="h-full" />
                  <div>
                    <p className="text-sm">{product.title}</p>
                    <p className="text-sm text-gray-500">
                      {product.quantity} item
                    </p>
                  </div>
                </div>
                <p>${product.price}</p>
              </Box>
            )}

            <Box bg="" className="flex justify-between gap-10 items-center">
              <p>SubTotal</p>
              <p>
                $
                {!Array.isArray(product)
                  ? product.price * product.quantity
                  : totalPrice}
              </p>
            </Box>
            <Box bg="" className="flex justify-between gap-10 items-center">
              <p>Shipping</p>
              <p>$50</p>
            </Box>
            <Box bg="" className="flex justify-between gap-10 items-center">
              <p>Total</p>
              <p>
                $
                {!Array.isArray(product) ? product.price + 50 : totalPrice + 50}
              </p>
            </Box>
            <RadioGroup defaultValue="2">
              <VStack align={"start"} spacing={5} direction="row">
                <Radio colorScheme="red" value="1">
                  Bank
                </Radio>
                <Radio colorScheme="red" value="2">
                  Cash on delivery
                </Radio>
              </VStack>
            </RadioGroup>
            <div className=" relative">
              <span className="absolute text-3xl capitalize left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                comming soon
              </span>
              <div className=" opacity-45 flex gap-2 w-full">
                <Input placeholder="Coupon Code" readOnly />
                <Button
                  className="cursor-not-allowed"
                  colorScheme="red"
                  width={"200px"}
                >
                  Apply Coupon
                </Button>
              </div>
            </div>
          </VStack>
        </div>
      </div>
    </div>
  );
};

export default Billing;
