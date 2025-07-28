import React from "react";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { useCart } from "../../zustand/useCart";

const PriceCart = ({ data }) => {
  const { toggleToCart, cart } = useCart();
  const navigate = useNavigate();
  const price = cart
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);
  return (
    <div className="container pt-16">
      <div className="flex flex-col md:flex-row gap-7">
        {/*  */}
        <div className="w-full md:w-2/3 overflow-x-scroll md:overflow-auto">
          <table className="w-[700px]  md:w-[800px] lg:w-full">
            <thead className="h-14 bg-second">
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item) => (
                <tr key={item.id}>
                  <td
                    onClick={() => navigate(`/product/${item.id}`)}
                    className="flex items-center gap-8 cursor-pointer"
                  >
                    <div className="size-[105px] mt-5 p-2 rounded-border-radius bg-second overflow-hidden">
                      <img
                        className="w-full bg-contain hover:scale-105 duration-300"
                        src={item.thumbnail}
                        alt={item.title}
                      />
                    </div>
                    <div className="text-second-text">
                      {item.title.split(" ").slice(0, 2).join(" ")}
                    </div>
                  </td>
                  <td
                    onClick={() => navigate(`/product/${item.id}`)}
                    className="text-second-text cursor-pointer"
                  >
                    Rs. {item.price}
                  </td>
                  <td>
                    <div className="border border-gray-300 rounded-border-radius size-10 flex items-center justify-center">
                      {item.quantity}
                    </div>
                  </td>
                  <td
                    className="cursor-pointer"
                    onClick={() => navigate(`/product/${item.id}`)}
                  >
                    Rp. {(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td>
                    <button
                      onClick={() => toggleToCart(item)}
                      className=" text-4xl md:text-2xl text-main cursor-crosshair"
                    >
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/*  */}
        <div className="sticky top-[100px] w-full md:w-2/6 min-h-[450px]  rounded-border-radius-middle h-full bg-second pt-14 pb-16">
          <h2 className="font-semibold text-2xl md:text-3xl text-center">
            Cart Totals
          </h2>
          <div className="mt-16 mx-auto w-3/4 lg:w-1/2 flex justify-between">
            <span>Subtotal</span>
            <span>Rs. {price}</span>
          </div>
          <div className="mx-auto mt-4 w-3/4 lg:w-1/2 flex justify-between">
            <span>Total</span>
            <span className="text-lg text-main">Rs. {price}</span>
          </div>
          <button
            onClick={() => navigate("/checkout")}
            className="mt-10 mx-auto w-2/3 h-14 block border cursor-pointer text-lg rounded-border-radius hover:bg-black hover:text-white duration-300"
          >
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(PriceCart);
