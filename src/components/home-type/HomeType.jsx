import React from "react";
import Dining from "../../assets/Mask Group.png";
import Living from "../../assets/Image-living room.png";
import Bedroom from "../../assets/Mask Group (1).png";

const HomeType = () => {
  return (
    <div className="container">
      <h2 className="text-[#333333] font-poppins text-[32px] font-bold leading-[48px] tracking-[0px] text-center mt-[55px]">Browse The Range</h2>
      <p className="text-[#666666] font-poppins text-[20px] font-normal leading-[30px] tracking-[0px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="flex gap-[20px] justify-center mt-[62px]">
        <div>
          <img src={Dining} alt="Dining-bg" />
          <h3 className="text-[#333333] font-poppins text-[24px] font-semibold leading-[36px] tracking-[0px] text-center">Dining</h3>
        </div>
        <div>
          <img src={Living} alt="Living-bg" />
          <h3 className="text-[#333333] font-poppins text-[24px] font-semibold leading-[36px] tracking-[0px] text-center">Living</h3>
        </div>
        <div>
          <img src={Bedroom} alt="Bedroom-bg" />
          <h3 className="text-[#333333] font-poppins text-[24px] font-semibold leading-[36px] tracking-[0px] text-center">Bedroom</h3>
        </div>
      </div>
    </div>
  );
};

export default React.memo(HomeType);
