import React from "react";
import { useNavigate } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline, IoCartSharp } from "react-icons/io5";
import { useStore } from "../../zustand/useStore";
import { useCart } from "../../zustand/useCart";

const Card = ({ data }) => {
  const navigate = useNavigate();
  const { toggleWishlist, wishlist } = useStore();
  const { cart, toggleToCart } = useCart();

  return (
    <div className="container px-4">
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data?.map(product => (
          <div
            key={product.id}
            className="relative group flex flex-col overflow-hidden bg-white transition-shadow duration-300 hover:shadow-xl rounded-md border border-second"
          >
            <div className="h-[280px] bg-white overflow-hidden cursor-pointer relative">
                <div className="absolute top-2 right-[-60px] w-[48px] h-[48px] bg-[#EF7F7F] text-white text-sm font-bold flex items-center justify-center rounded-full translate-x-0 group-hover:translate-x-[-70px] transition-transform duration-300 max-[760px]:top-2 max-[760px]:right-2 max-[760px]:group-hover:translate-x-[0px]">
                -30%
                </div>

              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-full object-contain hover:scale-105 duration-200"
                onClick={() => navigate(`/product/${product.id}`)}
              />
            </div>
            <div className="text-left flex flex-col justify-between flex-grow bg-second p-4">
              <div onClick={() => navigate(`/product/${product.id}`)}>
                <h3 className="font-semibold text-[18px] mb-1 cursor-pointer">{product.title}</h3>
                <p className="text-sm text-[#898989] mb-2 cursor-pointer">{product.brand}</p>
              </div>

              <div className="flex justify-between items-center relative">
                <strong className="text-[18px] font-bold mt-auto">Rp {product.price}</strong>
                <div className="text-3xl md:text-2xl flex items-center gap-2.5">
                  <button onClick={() => toggleWishlist(product)} className="cursor-pointer">
                    {wishlist.some(item => item.id === product.id) ? <FcLike /> : <CiHeart />}
                  </button>
                  <button onClick={() => toggleToCart(product)} className="cursor-pointer">
                    {cart.some(item => item.id === product.id) ? <IoCartSharp /> : <IoCartOutline />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Card);
