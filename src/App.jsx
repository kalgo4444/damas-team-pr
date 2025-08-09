import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lodaing from "./components/lodaing";

const Home = React.lazy(() => import("./pages/home/Home"));
const NotFound = React.lazy(() => import("./pages/not-found/NotFound"));
const Layout = React.lazy(() => import("./pages/layout/Layout"));
const DetailProduct = React.lazy(() =>
  import("./pages/detail-product/DetailProduct")
);
const Cart = React.lazy(() => import("./pages/cart/Cart"));
const Contact = React.lazy(() => import("./pages/contact/Contact"));
const Blog = React.lazy(() => import("./pages/about/Blog"));
const Checkout = React.lazy(() => import("./pages/checkout/Checkout"));
const Shop = React.lazy(() => import("./pages/shop/Shop"));
const Wishlist = React.lazy(() => import("./pages/wishlist/Wishlist"));

const App = () => {
  return (
    <Suspense fallback={<Lodaing />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<Home />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<DetailProduct />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default React.memo(App);
