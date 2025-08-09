import React from "react";
import heroImage from "../../assets/heroImage.png";

const Hero = ({ text }) => {
  return (
    <div
      className="hero min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="container h-full px-4 sm:px-6 lg:px-8 flex items-end justify-end">
        <div className="bg-white/70 rounded-[10px] p-10 max-w-xl w-full">
          <h3 className="text-[#333333] font-poppins text-sm sm:text-base font-semibold leading-6 tracking-[2px] text-left">
            New Arrival
          </h3>
          <h1 className="text-[#B88E2F] font-poppins text-3xl sm:text-4xl md:text-[52px] font-bold leading-[45px] sm:leading-[55px] md:leading-[65px] tracking-[0px] text-left mt-2">
            Discover Our New Collection
          </h1>
          <p className="text-[#333333] font-poppins text-[16px] md:text-[18px] font-medium leading-[22px] md:leading-[24px] tracking-[0px] text-left mt-[17px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            <br className="hidden sm:block" />
            elit tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="w-full sm:w-[222px] h-[60px] sm:h-[74px] bg-[#B88E2F] text-white font-poppins text-sm font-bold leading-6 tracking-normal text-center uppercase mt-[30px] sm:mt-[46px] hover:bg-[#a87c00] hover:scale-105 hover:duration-300">
            BUY NOW
          </button>
        </div>
      </div>
      <h1 className="text-white text-xl sm:text-2xl md:text-4xl font-bold absolute top-6 sm:top-10">
        {text}
      </h1>
    </div>
  );
};

export default React.memo(Hero);
