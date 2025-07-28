import React from "react";
import { ARTICLE } from "../../static";
import { FaUser, FaTag } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

const Article = () => {
  return (
    <>
      {ARTICLE?.map((item) => (
        <article key={item.id} className="mb-14">
          <img src={item.image} alt={item.title} />
          <div className="text-second-text text-xs sm:text-base mt-3 flex gap-3 sm:gap-8">
            <span className="flex items-center gap-3">
              <FaUser />
              <span>{item.owner}</span>
            </span>
            <span className="flex items-center gap-3">
              <MdDateRange />
              <span>{item.time}</span>
            </span>
            <span className="flex items-center gap-3">
              <FaTag />
              <span>{item.tag}</span>
            </span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-medium mt-4">
            {item.title}
          </h2>
          <p className="mt-3 text-sm text-second-text">{item.desc}</p>
          <button
            type="button"
            className="mt-7 border-b text-sm cursor-pointer"
          >
            Read More
          </button>
        </article>
      ))}
    </>
  );
};

export default React.memo(Article);
