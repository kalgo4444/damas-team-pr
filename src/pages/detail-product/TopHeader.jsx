import React from "react";

const TopHeader = ({ data }) => {
  return (
    <div className="h-[100px] bg-second w-full flex items-center">
      <div className="container text-xs sm:text-sm flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-second-text hover:text-black cursor-pointer">
            Home
          </span>{" "}
          <span>{">"}</span>{" "}
          <span className="text-second-text hover:text-black cursor-pointer">
            Shop
          </span>{" "}
          <span>{">"}</span>
          <span className="pl-5 py-1.5 border-l-2 border-gray-400 cursor-pointer">
            {data?.title}
          </span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(TopHeader);
