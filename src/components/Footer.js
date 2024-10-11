import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React from "react";
import qr from "../assets/qr.png";
import face from "../assets/facebook.webp";
import twitter from "../assets/twitter.webp";
import linked from "../assets/linkedIn.webp";
import github from "../assets/github.png";
import appstore from "../assets/appstore.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <div className="bg-black py-16">
      <div className="mainFooter w-full px-5 md:px-0 md:w-[90%] m-auto grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-5 text-white">
        <div className="text-start flex flex-col gap-3">
          <h3 className="font-bold text-lg">Exclusive</h3>
          <p className="text-sm text-[#fafafa]">Subscirbe</p>
          <p className="text-[#fafafa]">Get 10% off your first order</p>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter Email"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                send
              </Button>
            </InputRightElement>
          </InputGroup>
        </div>
        <div className="text-start flex flex-col gap-3">
          <h3 className="font-bold text-lg">Support</h3>
          <address className="text-[#fafafa]">
            Elsafyna,toukh, <br />
            near to youth center
          </address>
          <p className="text-[#fafafa]">sayedrady61@gmail.com</p>
          <p className="text-[#fafafa]">01013631377</p>
        </div>
        <div className="text-start flex flex-col gap-3">
          <h3 className="font-bold text-lg">Account</h3>
          <ul className="flex flex-col gap-3">
            <li>
              <a href="">My Account</a>
            </li>
            <a href="">Login / Register</a>
            <li>
              <a href="">Cart</a>
            </li>
            <li>
              <a href="">Wishlist</a>
            </li>
            <li>
              <a href="">Shop</a>
            </li>
          </ul>
        </div>
        <div className="text-start flex flex-col gap-3">
          <h3 className="font-bold text-lg">Quick Link</h3>
          <ul className="flex flex-col gap-3">
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <a href="">Terms Of Use</a>
            <li>
              <a href="">Faq</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div className="text-start flex flex-col gap-3">
          <h3 className="font-bold text-lg">Download App</h3>
          <p>save $3 with app new user only</p>
          <div className="flex gap-3">
            <img src={qr} className="max-w-24" alt="" />
            <div className="flex flex-col justify-between w-full">
              <Button colorScheme="white" variant="outline">
                <img
                  className="h-4 w-4 me-2 ms-2"
                  src="https://cdn-icons-png.flaticon.com/512/732/732208.png"
                  alt=""
                />
                <span>Google Play</span>
              </Button>
              <Button colorScheme="white" variant="outline">
                <img className="h-5 w-5 me-2" src={appstore} alt="" />
                <span>App Store</span>
              </Button>
            </div>
          </div>
          <ul className="flex justify-between mt-2">
            <li>
              <a href="">
                <i
                  className="fa-brands fa-facebook-f fa-lg"
                  style={{
                    color: "#ffffff",
                  }}
                ></i>
              </a>
            </li>
            <li>
              <a href="">
                <i
                  className="fa-brands fa-x-twitter fa-lg"
                  style={{
                    color: "#ffffff",
                  }}
                ></i>
              </a>
            </li>
            <li>
              <a href="">
                <i
                  className="fa-brands fa-linkedin-in fa-lg"
                  style={{
                    color: "#ffffff",
                  }}
                ></i>{" "}
              </a>
            </li>
            <li>
              <a href="">
                <i
                  className="fa-brands fa-github fa-lg"
                  style={{
                    color: "#ffffff",
                  }}
                ></i>{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-gray-400 mt-10 text-center border-t border-gray-800 pt-2 flex items-center justify-center">
        Copyright 3AM ELSAYED 2024. All right reserved
      </div>
    </div>
  );
};

export default Footer;
