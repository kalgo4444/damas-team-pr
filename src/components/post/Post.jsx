import React from "react";
import { POST } from "../../static";

const Post = () => {
  return (
    <div className="px-0 sm:px-5 lg:px-10 pt-2 pb-16">
      <h3 className="text-xl lg:text-2xl font-medium mb-10">Recent Post</h3>
      <div className="flex flex-col gap-10">
        {POST?.map((post) => (
          <div key={post.id} className="w-full flex gap-2.5">
            <div className="w-2/6">
              <img
                src={post.img}
                alt={post.title}
                className="size-20 w-f block mx-auto bg-contain"
              />
            </div>
            <div className="w-2/3 flex flex-col max-xl:text-sm">
              <h3>{post.title}</h3>
              <p>{post.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Post);
