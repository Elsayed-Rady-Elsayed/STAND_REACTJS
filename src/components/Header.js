import { SearchIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const headerRef = useRef();
  return (
    <div className="border-b border-gray-200 relative">
      <div className="flex justify-between items-center p-5 w-[90%] m-auto">
        <div className="logo font-bold text-2xl">Exclusive</div>
        <span
          className="block md:hidden"
          onClick={() => {
            headerRef.current.classList.toggle("hidden");
          }}
        >
          <HamburgerIcon />
        </span>
        <div
          ref={headerRef}
          className="hidden absolute top-full w-full left-0 md:static p-5 md:p-0 md:border-0 border-b bg-white z-50 border-gray-300 md:flex items-center flex-1 justify-between"
        >
          <nav className="flex-1 flex justify-center mb-5 md:mb-0">
            <ul className="flex flex-col md:flex-row md:gap-10 gap-5 font-normal">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/users"}>Contact</Link>
              </li>
              <li>
                <Link to={"/orders"}>About</Link>
              </li>
              <li>
                <Link to={"/SignUp"}>Sign Up</Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <InputGroup width={"100%"}>
              <InputLeftElement pointerEvents="click">
                <SearchIcon
                  onClick={() => console.log("aaa")}
                  color="gray.300"
                />
              </InputLeftElement>
              <Input
                type="email"
                size={"md"}
                width={"100%"}
                placeholder="what are you looking for?"
                focusBorderColor="red"
              />
            </InputGroup>
            <i className="fa-regular fa-heart fa-lg" style={{}}></i>
            <i className="fa-solid fa-cart-shopping fa-lg"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
