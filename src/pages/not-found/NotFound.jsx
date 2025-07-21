import React from "react";
import {  useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate()
  return (
    <div className="text-center  h-[100vh] flex flex-col justify-center  items-center">
      <h2 className="text-[#B88E2F] text-[20vh] font-[700]">404</h2>
      <p className="text-[18px] font-[600] "><span className="text-[25px] font-bold pr-[5px] text-[#B88E2F]">Opss </span> Page Not Found :(</p>
      <div className="flex gap-[20px]">
        <button className='max-[450px]:px-[30px] max-[450px]:text-[14px] cursor-pointer duration-200 shadow-[#BBBE2F] hover:shadow-2xs font-[600] text-[16px] text-[#000] rounded-[3px] py-[12px] mt-[32px] mb-[68px] px-[45px] border-[1px] border-[#B88E2F]' onClick={()=> navigate("/")}>go home</button>
        <button className='max-[450px]:px-[30px] max-[450px]:text-[14px] cursor-pointer duration-200 shadow-[#BBBE2F] hover:shadow-2xs font-[600] text-[16px] text-[#000] rounded-[3px] py-[12px] mt-[32px] mb-[68px] px-[45px] border-[1px] border-[#B88E2F]' onClick={()=> navigate(-1)}>go back</button>
      </div>
    </div>
  );
};

export default NotFound;
