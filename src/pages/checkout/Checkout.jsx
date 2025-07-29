import React from "react";
import { useCart } from "../../zustand/useCart";
import { Navigate } from "react-router-dom";
import axios from "axios";

const BOT_TOKEN = "8447874613:AAHI85W-u9YjnrMXUpTHDO-ZERpYL4wUJsE";
const USER_ID = "6128494778";
const CHAT_ID = "";

//  https://api.telegram.org/bot[8447874613:AAHI85W-u9YjnrMXUpTHDO-ZERpYL4wUJsE]/getUpdates

//https://api.telegram.org/bot[8447874613:AAHI85W-u9YjnrMXUpTHDO-ZERpYL4wUJsE]/sendMessage?chat_id=[your chat_id]


const Checkout = () => {
  const { cart, clearCart } = useCart();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    let text = `<b>🛒 Buyurtma keldi</b>%0A%0A`;

    text += `First Name: <b>${data.firstName}</b>%0A`;
    text += `Last Name: <b>${data.lastName}</b>%0A`;
    text += `Company: <b>${data.company}</b>%0A`;
    text += `Country: <b>${data.country}</b>%0A`;
    text += `City: <b>${data.city}</b>%0A`;
    text += `Province: <b>${data.province}</b>%0A`;
    text += `ZIP: <b>${data.zip}</b>%0A`;
    text += `Address: <b>${data.address}</b>%0A`;
    text += `Phone: <b>${data.phone}</b>%0A`;
    text += `Email: <b>${data.email}</b>%0A`;
    text += `Note: <b>${data.note}</b>%0A%0A`;

    cart.forEach((item, i) => {
      text += `#${i + 1}. ${item.title} - ${item.quantity} pcs, ${
        item.price
      } Rs%0A`;
    });

    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    text += `%0A💰 Total: <b>${total}</b> Rs`;

    axios.get(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${USER_ID}&text=${text}&parse_mode=HTML`
    );

    e.target.reset();
  };

  if (!cart.length) return <Navigate to="/cart" replace />;

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-2xl font-bold">Billing details</h2>
        <div className="flex gap-[31px]">
          <div>
            <h3>First Name</h3>
            <br />
            <input
              name="firstName"
              placeholder="First Name"
              required
              className="w-[211px] h-[75px] border border-[#9f9f9f] rounded-[10px] bg-white px-4"
            />
          </div>
          <div>
            <h3>Last Name</h3>
            <br />
            <input
              name="lastName"
              placeholder="Last Name"
              required
              className="w-[211px] h-[75px] border border-[#9f9f9f] rounded-[10px] bg-white px-4"
            />
          </div>
        </div>
        <br />
        <div>
          <h3>Company Name (Optional)</h3>
          <br />
          <input
            name="company"
            placeholder="Company Name (Optional)"
            className="w-[453px] h-[75px] border border-[#9f9f9f] rounded-[10px] bg-white px-4"
          />
        </div>
        <br />
        <div>
          <h3>Country / Region</h3>
          <br />
          <input
            name="country"
            placeholder="Country / Region"
            defaultValue="Uzbekistan"
            className="w-[453px] h-[75px] border border-[#9f9f9f] rounded-[10px] bg-white px-4"
          />
        </div>
        <br />
        <div>
          <h3>Street address</h3>
          <br />
          <input
            name="address"
            placeholder="Street Address"
            required
            className="w-[453px] h-[75px] border border-[#9f9f9f] rounded-[10px] bg-white px-4"
          />
        </div>
        <br />
        <div>
          <h3>Town / City</h3>
          <br />
          <input
            name="city"
            placeholder="City"
            required
            className="w-[453px] h-[75px] border border-[#9f9f9f] rounded-[10px] bg-white px-4"
          />
        </div>
        <br />
        <div>
          <h3>Province</h3>
          <br />
          <input
            name="province"
            placeholder="Province"
            defaultValue="Tashkent"
            className="w-[453px] h-[75px] border border-[#9f9f9f] rounded-[10px] bg-white px-4"
          />
        </div>
        <br />
        <div>
          <h3>ZIP code</h3>

          <br />
          <input
            name="zip"
            placeholder="ZIP Code"
            className="w-[453px] h-[75px] border border-[#9f9f9f] rounded-[10px] bg-white px-4"
          />
        </div>
        <br />
        <div>
          <h3>Phone number</h3>
          <br />
          <input
            name="phone"
            placeholder="Phone"
            required
            className="w-[453px] h-[75px] border border-[#9f9f9f] rounded-[10px] bg-white px-4"
          />
        </div>
        <br />
        <div>
          <h3>Email address</h3>
          <br />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            className="w-[453px] h-[75px] border border-[#9f9f9f] rounded-[10px] bg-white px-4"
          />
        </div>
        <br />
        <textarea
          name="note"
          placeholder="Additional Information"
          className="w-[453px] h-[75px] border border-[#9f9f9f] rounded-[10px] bg-white px-4 py-2"
        />
        <button
          type="submit"
          className=" border py-3 rounded-[15px] hover:bg-black hover:text-white transition absolute w-[318px] h-[64px] left-[883px] right-[-668px] top-[630px] bottom-[-566px]"
        >
          Place order
        </button>
      </form>

      <div className="space-y-6 ">
        <div className="w-[608px]">
          <div className="flex">
            <h2 className="text-xl font-semibold mb-4">Product</h2>
            <h2 className="text-xl font-semibold mb-4 ml-[436px]">Subtotal</h2>
          </div>
          {cart.map((item, i) => (
            <div key={i} className="flex justify-between  py-2">
              <span>
                {item.title} x {item.quantity}
              </span>
              <span>{item.price * item.quantity} Rs</span>
            </div>
          ))}
          <div className="flex justify-between mt-4">
            <span className="text-black font-poppins text-base font-normal leading-6 text-left">
              Subtotal
            </span>
            <span className="text-black font-poppins text-base font-light leading-6 text-left">
              {cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}{" "}
              Rs
            </span>
          </div>
          <div className="flex justify-between mt-4">
            <span className="text-black font-poppins text-base font-normal leading-6 text-left">
              Total
            </span>
            <span className="text-[#b88e2f] font-poppins text-2xl font-bold leading-[36px] text-left">
              {cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}{" "}
              Rs
            </span>
          </div>
        </div>
        <hr className="text-[#D9D9D9]" />

        <div>
          <h3 className="font-semibold mb-2">Payment Method</h3>
          <br />
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="payment"
              value="bank"
              defaultChecked
              className="accent-black"
            />
            <span className="text-[#9f9f9f] font-medium text-base leading-6 text-left font-poppins">
              Direct Bank Transfer
            </span>
          </label>
          <br />
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="payment"
              value="cod"
              className="accent-black"
            />
            <span className="text-[#9f9f9f] font-medium text-base leading-6 text-left font-poppins">
              Cash on Delivery
            </span>
          </label>
          <br />
          <p>
            Your personal data will be used to support your experience
            <br />
            throughout this website, to manage access to your account, and
            <br /> for other purposes described in our <b>privacy policy</b>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Checkout);
