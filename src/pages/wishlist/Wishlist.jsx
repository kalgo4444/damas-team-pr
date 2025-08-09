import React, { useEffect } from "react";
import { useStore } from "../../zustand/useStore";
import Products from "../../components/products/Products";
import Banner from "../../components/banner/Banner";
import Quality from "../../components/quality/Quality";
import Empaty from "../../components/skeleton/Empaty";

const Wishlist = () => {
  const wishlist = useStore((state) => state.wishlist);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Banner title={"Wishlist"} text={"Wishlist"} />
      {wishlist.length === 0 ? (
        <Empaty />
      ) : (
        <Products title={null} data={wishlist} />
      )}

			</div>
			{wishlist.length === 0 ? (
				<div className="text-center py-20 ">
					<img className="mx-auto max-w-[300px]" src={"https://cdni.iconscout.com/illustration/premium/thumb/empty-wishlist-12057807-9824477.png?f=webp"} alt="" />
					<p className="text-[40px] text-gray-500/45 mb-4">Your wishlist is empty.</p>
				</div>
			) : (
				<Products title={null} data={wishlist} />
			)}

			<Quality />
		</div>
	);
};

export default React.memo(Wishlist);
