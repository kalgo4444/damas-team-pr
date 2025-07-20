import React, { useState } from "react";
import mainLogo from "../../assets/Frame 168.png";
import { FaRegUser } from "react-icons/fa6";
import { BsSearch, BsXLg } from "react-icons/bs";
import {
  AiOutlineHeart,
  AiOutlineMenu,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center py-5">
        <a href="/">
          <img src={mainLogo} alt="main logo" className="h-8 md:h-auto" />
        </a>

        <ul className="flex gap-4 sm:gap-8 md:gap-12 lg:gap-16 items-center">
          <li className="hover:text-[#B88E2F] hover:scale-110 transition duration-300 cursor-pointer">
            Home
          </li>
          <li className="hover:text-[#B88E2F] hover:scale-110 transition duration-300 cursor-pointer">
            Shop
          </li>
          <li className="hover:text-[#B88E2F] hover:scale-110 transition duration-300 cursor-pointer">
            About
          </li>
          <li className="hover:text-[#B88E2F] hover:scale-110 transition duration-300 cursor-pointer">
            Contact
          </li>
        </ul>

        <div className="hidden md:flex gap-6 lg:gap-8 xl:gap-10 items-center">
          <FaRegUser
            className="hover:scale-110 transition duration-300 cursor-pointer"
            size={20}
          />
          <BsSearch
            className="hover:scale-110 transition duration-300 cursor-pointer"
            size={20}
          />
          <AiOutlineHeart
            className="hover:scale-110 transition duration-300 cursor-pointer"
            size={20}
          />
          <AiOutlineShoppingCart
            className="hover:scale-110 transition duration-300 cursor-pointer"
            size={20}
          />
        </div>

        <div className="md:hidden flex items-center">
          <AiOutlineShoppingCart
            className="hover:scale-110 transition duration-300 cursor-pointer mr-4"
            size={20}
          />

          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <BsXLg
                size={24}
                className="hover:scale-110 transition duration-300"
              />
            ) : (
              <AiOutlineMenu
                size={24}
                className="hover:scale-110 transition duration-300"
              />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white z-40 pt-20 px-4 flex justify-center items-start">
            <div className="flex flex-col gap-8 items-center mt-8">
              <FaRegUser
                className="hover:scale-110 transition duration-300 cursor-pointer"
                size={24}
              />
              <BsSearch
                className="hover:scale-110 transition duration-300 cursor-pointer"
                size={24}
              />
              <AiOutlineHeart
                className="hover:scale-110 transition duration-300 cursor-pointer"
                size={24}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(Header);
