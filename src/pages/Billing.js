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
import React, { useState } from "react";
import monitor from "../assets/monitior.png";
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
  const setTheBillingData = (evt) => {
    const { name, value } = evt.target;
    setUserBillState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="text-start md:w-[90%] w-full p-2 md:p-0 m-auto mt-10">
      <h3 className="text-3xl font-bold">billing detail</h3>
      <div className="flex justify-between md:flex-row flex-col">
        <div className="text-start">
          <form className=" mt-10 flex flex-col gap-4" action="">
            <div>
              <label htmlFor="" className="text-xs capitalize">
                first name <span className="text-red-600">*</span>
              </label>
              <Input
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
                bg={"#F5F5F5"}
                value={userBillState.EmailAddress}
                onChange={(evt) => {
                  setTheBillingData(evt);
                }}
                name="EmailAddress"
              />
            </div>
            <div>
              <label htmlFor="" className="text-xs capitalize">
                phone number <span className="text-red-600">*</span>
              </label>
              <Input
                bg={"#F5F5F5"}
                value={userBillState.PhoneNumber}
                onChange={(evt) => {
                  setTheBillingData(evt);
                }}
                name="PhoneNumber"
              />
            </div>
          </form>
          <Stack className="mt-5" spacing={5} direction="row">
            <Checkbox colorScheme="red" className="text-sm" defaultChecked>
              Save this information for faster check-out next time
            </Checkbox>
          </Stack>
        </div>
        <div className="mt-10 md:w-[450px]">
          <VStack
            divider={<StackDivider borderColor="gray.200" />}
            spacing={4}
            align="stretch"
          >
            <Box bg="" className="flex justify-between gap-10 items-center">
              <div className="flex gap-3 items-center">
                <img src={monitor} alt="" />
                <p>LCD Monitior</p>
              </div>
              <p>$560</p>
            </Box>
            <Box bg="" className="flex justify-between gap-10 items-center">
              <div className="flex gap-3 items-center">
                <img src={monitor} alt="" />
                <p>LCD Monitior</p>
              </div>
              <p>$560</p>
            </Box>
            <Box bg="" className="flex justify-between gap-10 items-center">
              <p>SubTotal</p>
              <p>$1750</p>
            </Box>
            <Box bg="" className="flex justify-between gap-10 items-center">
              <p>Shipping</p>
              <p>$1750</p>
            </Box>
            <Box bg="" className="flex justify-between gap-10 items-center">
              <p>Total</p>
              <p>$1750</p>
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
            <div className="flex gap-2 w-full">
              <Input placeholder="Coupon Code" />
              <Button className="" colorScheme="red" width={"200px"}>
                Apply Coupon
              </Button>
            </div>
            <Button className="" colorScheme="red" width={"200px"}>
              place order
            </Button>
          </VStack>
        </div>
      </div>
    </div>
  );
};

export default Billing;
