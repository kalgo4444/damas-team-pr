import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-[#333] font-poppins">
      <hr className="text-[#D9D9D9]" />

      {/* faqat sm: dan boshlab container bo'ladi */}
      <div className="w-full sm:container sm:mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-black text-[24px] font-bold leading-[36px]">Funiro.</h2>
          <p className="text-[#9F9F9F] text-[16px] mt-[20px]">
            400 University Drive Suite 200 Coral Gables,<br />
            FL 33134 USA
          </p>
        </div>

        <div className="sm:ml-[136px] ml-0">
          <h3 className="text-[#9f9f9f] text-[16px] font-medium">Links</h3>
          <ul className="mt-4 space-y-2">
            <li className=""><a href="#" className="text-black text-[16px] font-medium">Home</a></li>
            <li><a href="#" className="text-black text-[16px] font-medium">Shop</a></li>
            <li><a href="#" className="text-black text-[16px] font-medium">About</a></li>
            <li><a href="#" className="text-black text-[16px] font-medium">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#9f9f9f] text-[16px] font-medium">Help</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-black text-[16px] font-medium">Payment Options</a></li>
            <li><a href="#" className="text-black text-[16px] font-medium">Returns</a></li>
            <li><a href="#" className="text-black text-[16px] font-medium">Privacy Policies</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#9f9f9f] text-[16px] font-medium mb-2">Newsletter</h3>
          <form className="flex border-b border-[#9F9F9F] pb-1 flex-wrap gap-2">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="bg-transparent outline-none text-sm w-full sm:w-auto placeholder:text-[#9F9F9F]"
            />
            <button
              type="submit"
              className="text-sm font-semibold hover:underline"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-300 py-4 text-center">
        <p className="text-black text-[16px]">2023 Funiro. All rights reserved</p>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
