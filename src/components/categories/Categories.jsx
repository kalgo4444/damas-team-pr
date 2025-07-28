import React from "react";
import { CiSearch } from "react-icons/ci";
import { CATEGORIES } from "../../static";

const Categories = () => {
  return (
    <div className="px-0 sm:px-5 lg:px-10 pb-16">
      <div className="flex items-center h-14 px-1 border border-neutral-400 rounded-border-radius">
        <input
          type="text"
          className="max-w-[300px] w-full h-full outline-0 indent-5 text-2xl"
        />
        <button className="text-3xl cursor-pointer">
          <CiSearch />
        </button>
      </div>
      <div className="px-5">
        <h3 className="text-xl lg:text-2xl font-medium mt-10">Categories</h3>
        <div className="flex flex-col gap-7 pt-7">
          {CATEGORIES?.map((item, inx) => (
            <div
              className="flex items-center justify-between text-second-text"
              key={inx}
            >
              <span>{item.name}</span>
              <span>{item.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Categories);
