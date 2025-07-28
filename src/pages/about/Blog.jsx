import React, { useEffect } from "react";
import Banner from "../../components/banner/Banner";
import Quality from "../../components/quality/Quality";
import Article from "../../components/article/Article";
import Categories from "../../components/categories/Categories";
import Post from "../../components/post/Post";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      <Banner title={"Blog"} text={"Blog"} />
      <div className="container">
        <div className="mt-20 flex flex-col sm:flex-col-reverse md:flex-row gap-7 w-full min-h-screen">
          <div className="w-full md:w-2/3">
            <Article />
          </div>
          <div className="w-full md:w-2/6 flex flex-col sm:flex-row-reverse md:flex-col gap-10">
            <Categories />
            <Post />
          </div>
        </div>
      </div>
      <Quality />
    </section>
  );
};

export default React.memo(Blog);
