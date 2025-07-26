import React, { useState } from "react";
import mainLogo from "../../assets/logo.png";
import { FaRegUser } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <div className="sticky top-0 left-0 w-full bg-white z-50 shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <NavLink to="/">
          <img src={mainLogo} alt="main logo" className="h-8 md:h-auto" />
        </NavLink>

        <div className="hidden md:flex gap-6 lg:gap-10 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition duration-300 cursor-pointer hover:text-[#B88E2F] hover:scale-110 ${
                isActive ? "text-[#B88E2F] font-semibold" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              `transition duration-300 cursor-pointer hover:text-[#B88E2F] hover:scale-110 ${
                isActive ? "text-[#B88E2F] font-semibold" : ""
              }`
            }
          >
            Shop
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition duration-300 cursor-pointer hover:text-[#B88E2F] hover:scale-110 ${
                isActive ? "text-[#B88E2F] font-semibold" : ""
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `transition duration-300 cursor-pointer hover:text-[#B88E2F] hover:scale-110 ${
                isActive ? "text-[#B88E2F] font-semibold" : ""
              }`
            }
          >
            Contact
          </NavLink>
        </div>

        <div className="flex gap-5 items-center">
          <NavLink to={"/about"}>
                      <FaRegUser
            className="transition duration-300 cursor-pointer"
            size={20}
          />
          </NavLink>
          <NavLink to={"/search"}>
                      <BsSearch
            className="transition duration-300 cursor-pointer"
            size={20}
          />
          </NavLink>
          <NavLink to={"/wishlist"}>
                      <AiOutlineHeart
            className="transition duration-300 cursor-pointer"
            size={20}
          />
          </NavLink>
          <NavLink to={"/cart"}>
                      <AiOutlineShoppingCart
            className="transition duration-300 cursor-pointer"
            size={20}
          />
          </NavLink>




          <div className="md:hidden">
            <GiHamburgerMenu
              onClick={toggleDrawer}
              size={24}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 -0 h-full w-64 bg-white z-40 shadow-md p-6 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Menu</h2>
          <RxCross1
            onClick={toggleDrawer}
            className="cursor-pointer"
            size={24}
          />
        </div>
        <div className="flex flex-col gap-4">
          <NavLink
            to="/"
            onClick={toggleDrawer}
            className="hover:text-[#B88E2F] transition duration-300"
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            onClick={toggleDrawer}
            className="hover:text-[#B88E2F] transition duration-300"
          >
            Shop
          </NavLink>
          <NavLink
            to="/about"
            onClick={toggleDrawer}
            className="hover:text-[#B88E2F] transition duration-300"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            onClick={toggleDrawer}
            className="hover:text-[#B88E2F] transition duration-300"
          >
            Contact
          </NavLink>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/15  md:hidden"
          onClick={toggleDrawer}
        ></div>
      )}
    </div>
  );
};

export default React.memo(Header);
