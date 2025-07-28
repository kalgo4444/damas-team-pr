import React, { useEffect } from "react";
import { useStore } from "../../zustand/useStore";
import Products from "../../components/products/Products";
import Banner from "../../components/banner/Banner";
import Quality from "../../components/quality/Quality";

const Wishlist = () => {
  const wishlist = useStore((state) => state.wishlist);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Banner title={"Wishlist"} text={"Wishlist"} />
      <Products data={wishlist} />
      {/* Code hare */}
      <Quality />
    </div>
  );
};

export default React.memo(Wishlist);
