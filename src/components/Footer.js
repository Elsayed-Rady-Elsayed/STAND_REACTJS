import React, { useState } from "react";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import qr from "../assets/qr.png";
import appstore from "../assets/appstore.png";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => setEmail(e.target.value);

  const handleSubmit = () => {
    console.log("Submitted email:", email);
  };

  return (
    <footer className="bg-black py-16">
      <div className="w-full px-5 md:px-0 md:w-[90%] m-auto grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-5 text-white">
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-lg">Exclusive</h3>
          <p className="text-sm text-[#fafafa]">
            Subscribe and get 10% off your first order
          </p>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type="text"
              placeholder="Enter Email"
              value={email}
              onChange={handleInputChange}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleSubmit}>
                Send
              </Button>
            </InputRightElement>
          </InputGroup>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-lg">Support</h3>
          <address className="text-[#fafafa]">
            Elsafyna, Toukh, <br /> Near Youth Center
          </address>
          <p className="text-[#fafafa]">sayedrady61@gmail.com</p>
          <p className="text-[#fafafa]">01013631377</p>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-lg">Account</h3>
          <ul className="flex flex-col gap-3">
            <li>
              <a href="#">My Account</a>
            </li>
            <li>
              <a href="#">Login / Register</a>
            </li>
            <li>
              <a href="#">Cart</a>
            </li>
            <li>
              <a href="#">Wishlist</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-lg">Quick Links</h3>
          <ul className="flex flex-col gap-3">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-lg">Download App</h3>
          <p>Save $3 for new users on the app</p>
          <div className="flex gap-3 flex-col md:flex-row items-center">
            <img src={qr} className="max-w-24" alt="QR Code" />
            <div className="flex flex-col justify-between w-full gap-1">
              <Button colorScheme="white" variant="outline">
                <img
                  className="h-4 w-4 me-2 ms-2"
                  src="https://cdn-icons-png.flaticon.com/512/732/732208.png"
                  alt="Google Play"
                />
                Google Play
              </Button>
              <Button colorScheme="white" variant="outline">
                <img className="h-5 w-5 me-2" src={appstore} alt="App Store" />
                App Store
              </Button>
            </div>
          </div>
          <ul className="flex justify-between mt-2">
            <li>
              <a href="#">
                <i
                  className="fa-brands fa-facebook-f fa-lg"
                  aria-label="Facebook"
                ></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i
                  className="fa-brands fa-twitter fa-lg"
                  aria-label="Twitter"
                ></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i
                  className="fa-brands fa-linkedin-in fa-lg"
                  aria-label="LinkedIn"
                ></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i
                  className="fa-brands fa-github fa-lg"
                  aria-label="GitHub"
                ></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-gray-400 mt-10 text-center border-t border-gray-800 pt-2">
        &copy; 3AM ELSAYED 2024. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
