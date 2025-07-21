import React from "react";
import Dining from "../../assets/Mask Group.png";
import Living from "../../assets/Image-living room.png";
import Bedroom from "../../assets/Mask Group (1).png";

const HomeType = () => {
  return (
    <div className="container px-4 sm:px-6 lg:px-8">
      <h2 className="text-[#333333] font-poppins text-[28px] sm:text-[32px] font-bold leading-[40px] sm:leading-[48px] tracking-[0px] text-center mt-[40px] sm:mt-[55px]">
        Browse The Range
      </h2>
      <p className="text-[#666666] font-poppins text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[24px] sm:leading-[30px] text-center mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div className="flex flex-col sm:flex-row gap-6 sm:gap-[20px] justify-center items-center mt-[40px] sm:mt-[62px]">
        <div className="w-full sm:w-auto text-center">
          <img src={Dining} alt="Dining-bg" className="mx-auto w-[80%] sm:w-auto" />
          <h3 className="text-[#333333] font-poppins text-[20px] sm:text-[24px] font-semibold leading-[32px] sm:leading-[36px] mt-3">
            Dining
          </h3>
        </div>

        <div className="w-full sm:w-auto text-center">
          <img src={Living} alt="Living-bg" className="mx-auto w-[80%] sm:w-auto" />
          <h3 className="text-[#333333] font-poppins text-[20px] sm:text-[24px] font-semibold leading-[32px] sm:leading-[36px] mt-3">
            Living
          </h3>
        </div>

        <div className="w-full sm:w-auto text-center">
          <img src={Bedroom} alt="Bedroom-bg" className="mx-auto w-[80%] sm:w-auto" />
          <h3 className="text-[#333333] font-poppins text-[20px] sm:text-[24px] font-semibold leading-[32px] sm:leading-[36px] mt-3">
            Bedroom
          </h3>
        </div>
      </div>
    </div>
  );
};

export default React.memo(HomeType);
