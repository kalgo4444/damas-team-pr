import React from "react";
import Banner from "../../components/banner/Banner";
import Quality from "../../components/quality/Quality";

const Blog = () => {
  return (
    <section>
      <Banner title={"Blog"} text={"Blog"} />
      {/* Code hare */}
      <Quality />
    </section>
  );
};

export default React.memo(Blog);
