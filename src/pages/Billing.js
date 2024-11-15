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
import { doc, updateDoc } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { db } from "../firebase";
import { useSelector } from "react-redux";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
const Billing = () => {
  const PaymentRef = useRef();
  const stripe = useStripe();
  const element = useElements();
  const [err, setErr] = useState(null);
  const [dis, setDis] = useState(null);
  const [succ, setsucc] = useState(false);
  const [processing, setProcess] = useState(null);

  const [totalPrice, setTotalPrice] = useState();
  const [selectOpt, setSelectOpt] = useState();
  const location = useLocation();
  const cartAndWishList = useSelector((state) => state.user);
  const userInfo = useSelector((state) => state.user.user);
  const product = location.state.product;
  const [clientSecret, setClientSecret] = useState();
  useEffect(() => {
    if (Array.isArray(product)) {
      setTotalPrice(
        product.reduce((total, el) => {
          return total + el.price * el.quantity;
        }, 0)
      );
    }
  }, []);
  useEffect(() => {
    const getClientSecret = async () => {
      try {
        const res = await fetch(
          "http://127.0.0.1:5001/ecommerceapp-e8463/us-central1/api/payments/create",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              total: !Array.isArray(product)
                ? parseInt(product.price + 50)
                : parseInt(totalPrice + 50),
            }),
          }
        );
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        console.log(data);

        setClientSecret(data.clientSecret);
        return data;
      } catch (error) {
        console.error("Error fetching client secret:", error);
      }
    };
    if (selectOpt === "bank") {
      getClientSecret();
    }
  }, [selectOpt]);
  const updateUserOrders = async (uid, newData) => {
    try {
      const docRef = doc(db, "users", uid);
      await updateDoc(docRef, newData);
    } catch (e) {
      console.log(e);
    }
  };
  const [isComplete, setIsComplete] = useState(false);
  const handleChange = (e) => {
    setDis(e.empty);
    setErr(err ? err.message : "");
    setIsComplete(e.complete);
  };
  return (
    <div className="text-start md:w-[90%] w-full p-2 md:p-5 m-auto mt-10 my-10 md:my-0">
      <h3 className="text-3xl font-bold">billing detail</h3>
      <div className="flex justify-between md:flex-row flex-col items-center">
        <div className="text-start">
          <form
            className=" mt-10 flex flex-col gap-4"
            action=""
            onSubmit={async (event) => {
              event.preventDefault();
              const formData = new FormData(event.target);
              const data = Object.fromEntries(formData.entries());
              if (
                data.FirstName &&
                data.LastName &&
                data.Town &&
                data.Appartment &&
                data.email &&
                data.phone
              ) {
                updateUserOrders(userInfo.id, {
                  cart: cartAndWishList.cart,
                  wishList: cartAndWishList.wishList,
                  orders: Array.isArray(product)
                    ? [...product, ...userInfo.orders]
                    : [product, ...userInfo.orders],
                  email: userInfo.email,
                  id: userInfo.id,
                  name: userInfo.name,
                });
                if (selectOpt === "cod") {
                  toast.success("your order created successfully");
                  setTimeout(() => {
                    window.location.replace("/Orders");
                  }, 1000);
                } else {
                  setProcess(true);
                  const payload = await stripe
                    .confirmCardPayment(clientSecret, {
                      payment_method: {
                        card: element.getElement(CardElement),
                      },
                    })
                    .then((payIntent) => {
                      setsucc(true);
                      setErr(null);
                      setProcess(false);
                      toast.success("your order created successfully");
                      setTimeout(() => {
                        window.location.replace("/Orders");
                      }, 1000);
                    });
                }
              } else {
                toast.error("please enter all your information");
              }
            }}
          >
            <div>
              <label htmlFor="" className="text-xs capitalize">
                first name <span className="text-red-600">*</span>
              </label>
              <Input required bg={"#F5F5F5"} name="FirstName" />
            </div>
            <div>
              <label htmlFor="" className="text-xs capitalize">
                Last Name <span className="text-red-600">*</span>
              </label>
              <Input required bg={"#F5F5F5"} name="LastName" />
            </div>
            <div>
              <label htmlFor="" className="text-xs capitalize">
                Town / city <span className="text-red-600">*</span>
              </label>
              <Input required bg={"#F5F5F5"} name="Town" />
            </div>
            <div>
              <label htmlFor="" className="text-xs capitalize">
                Appartment <span className="text-red-600">*</span>
              </label>
              <Input required bg={"#F5F5F5"} name="Appartment" />
            </div>
            <div>
              <label htmlFor="" className="text-xs capitalize">
                Email Address <span className="text-red-600">*</span>
              </label>
              <Input name="email" required bg={"#F5F5F5"} />
            </div>
            <div>
              <label htmlFor="" className="text-xs capitalize">
                phone number <span className="text-red-600">*</span>
              </label>
              <Input name="phone" required bg={"#F5F5F5"} />
            </div>
            <div ref={PaymentRef} className="hidden">
              {" "}
              <CardElement onChange={handleChange} />
            </div>
            <Stack className="" spacing={5} direction="row">
              <Checkbox colorScheme="red" className="text-sm" defaultChecked>
                Save this information for faster check-out next time
              </Checkbox>
            </Stack>
            <button
              disabled={processing || dis || succ || !isComplete}
              type="submit"
              className="bg-red-500 text-white p-2 rounded-md"
              colorScheme="red"
              width={"200px"}
            >
              {processing ? "processing" : "place order"}
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
            <RadioGroup
              defaultValue="cod"
              onChange={(e) => {
                PaymentRef.current.classList.toggle("hidden");
                setSelectOpt(e);
              }}
            >
              <VStack align={"start"} spacing={5} direction="row">
                <Radio colorScheme="red" value="bank">
                  Bank
                </Radio>
                <Radio colorScheme="red" value="cod">
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
