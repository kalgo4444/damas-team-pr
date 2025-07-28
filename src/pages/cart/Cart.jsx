import React, { useEffect } from "react";
import Banner from "../../components/banner/Banner";
import Quality from "../../components/quality/Quality";
import { useCart } from "../../zustand/useCart";
import Empaty from "../../components/skeleton/Empaty";
import PriceCart from "../../components/price-cart/PriceCart";

const Cart = () => {
  const { cart } = useCart();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      <Banner title={"Cart"} text={"Cart"} />
      {cart.length == 0 ? <Empaty /> : <PriceCart data={cart} />}
      <Quality />
    </section>
  );
};

export default React.memo(Cart);
