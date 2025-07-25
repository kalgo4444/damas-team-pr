import React from "react";
import { useStore } from "../../zustand/useStore";
import Products from "../../components/products/Products";

const Wishlist = () => {
	const wishlist = useStore((state) => state.wishlist);

	
	return <div>
		<Products data={wishlist} />
	</div>;
};

export default React.memo(Wishlist);
