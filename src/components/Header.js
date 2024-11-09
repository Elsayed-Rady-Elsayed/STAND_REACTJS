import { SearchIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const nav = useNavigate();
  const [query, setQuery] = useState("");
  const user = useSelector((state) => state.user);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleSearch = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      nav(`/ShopAll/search/${query}`);
    }
  };

  return (
    <header className="border-b border-gray-200 relative">
      <div className="flex justify-between items-center md:p-5 py-2 px-2 md:px-0 md:w-[90%] m-auto">
        <div className="logo font-bold text-2xl">Exclusive</div>

        <span className="block md:hidden" onClick={toggleMenu}>
          <HamburgerIcon />
        </span>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-full w-full left-0 md:static p-5 md:p-0 md:border-0 border-b bg-white z-50 border-gray-300 md:flex items-center flex-1 justify-between`}
        >
          <nav className="flex-1 flex justify-center mb-5 md:mb-0">
            <ul className="flex flex-col md:flex-row md:gap-10 gap-5 font-normal">
              <li>
                <Link to="/" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/ContactUs" onClick={toggleMenu}>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/AboutUs" onClick={toggleMenu}>
                  About
                </Link>
              </li>
              {user.user.id === undefined ? (
                <li>
                  <Link to="/SignUp" onClick={toggleMenu}>
                    Sign Up
                  </Link>
                </li>
              ) : (
                <li
                  className="cursor-pointer"
                  onClick={() => {
                    auth.signOut();
                  }}
                >
                  logout
                </li>
              )}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <InputGroup width={"100%"}>
              <InputLeftElement
                pointerEvents="click"
                onClick={handleSearch}
                aria-label="Search"
              >
                <SearchIcon color="gray.300" />
              </InputLeftElement>
              <Input
                type="text"
                size={"md"}
                width={"100%"}
                placeholder="What are you looking for?"
                focusBorderColor="red"
                onKeyPress={handleSearch}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
              />
            </InputGroup>
            <Link to="/favourits" aria-label="View favourites">
              <i className="fa-regular fa-heart fa-lg"></i>
            </Link>

            <Link to="/cart" aria-label="View cart">
              <i className="fa-solid fa-cart-shopping fa-lg"></i>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
