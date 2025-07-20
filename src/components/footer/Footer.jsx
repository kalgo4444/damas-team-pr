import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-[#333] font-poppins">
      <hr className="text-[#D9D9D9]" />
      <div className="container px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-black font-poppins text-[24px] font-bold leading-[36px] tracking-[0%] text-left">
            Funiro.
          </h2>
          <p className="text-[#9F9F9F] font-poppins text-[16px] mt-[50px]">
            400 University Drive Suite 200 Coral Gables, <br />
            FL 33134 USA
          </p>
        </div>

        <div className="ml-[136px]">
          <h3 className="text-[#9f9f9f] font-poppins text-[16px] font-medium leading-[24px] tracking-[0%] text-left">
            Links
          </h3>
          <br />
          <ul className="">
            <li>
              <a
                href="#"
                className="text-black font-poppins text-[16px] font-medium leading-[24px] tracking-[0%] text-left"
              >
                Home
              </a>
            </li>
            <br />
            <li>
              <a
                href="#"
                className="text-black font-poppins text-[16px] font-medium leading-[24px] tracking-[0%] text-left"
              >
                Shop
              </a>
            </li>
            <br />
            <li>
              <a
                href="#"
                className="text-black font-poppins text-[16px] font-medium leading-[24px] tracking-[0%] text-left"
              >
                About
              </a>
            </li>
            <br />
            <li>
              <a
                href="#"
                className="text-black font-poppins text-[16px] font-medium leading-[24px] tracking-[0%] text-left"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#9f9f9f] font-poppins text-[16px] font-medium leading-[24px] tracking-[0%] text-left">
            Help
          </h3>
          <br />
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="text-black font-poppins text-[16px] font-medium leading-[24px] tracking-[0%] text-left"
              >
                Payment Options
              </a>
            </li>
            <br />
            <li>
              <a
                href="#"
                className="text-black font-poppins text-[16px] font-medium leading-[24px] tracking-[0%] text-left"
              >
                Returns
              </a>
            </li>
            <br />
            <li>
              <a
                href="#"
                className="text-black font-poppins text-[16px] font-medium leading-[24px] tracking-[0%] text-left"
              >
                Privacy Policies
              </a>
            </li>
            <br />
          </ul>
        </div>

        <div>
          <h3 className="text-[#9f9f9f] font-poppins text-[16px] font-medium leading-[24px] tracking-[0%] text-left">
            Newsletter
          </h3>
          <form className="flex border-b border-[#9F9F9F] pb-1">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="bg-transparent outline-none text-sm w-full placeholder:text-[#9F9F9F]"
            />
            <button
              type="submit"
              className="text-sm font-semibold hover:underline ml-2"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
        <div className="border-t border-gray-300 mt-4 w-[1236px]">
          <p className="text-black font-poppins text-[16px] font-normal leading-[24px] tracking-[0%] text-left">
            2023 Funiro. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
