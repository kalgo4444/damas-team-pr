import React, { useState } from "react";
import Banner from "../../components/banner/Banner";
import Quality from "../../components/quality/Quality";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
  };

  return (
    <>
      <Banner title="Contact" text="Contact" />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch With Us</h2>
          <p className="text-[#9F9F9F] leading-relaxed max-w-2xl mx-auto text-sm sm:text-base">
            For More Information About Our Product & Services. Please Feel Free To Drop Us
            An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT: Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-xl mt-1 text-black shrink-0" />
              <div>
                <h4 className="text-lg font-semibold">Address</h4>
                <p className="text-sm text-gray-700">
                  236 5th SE Avenue, New York NY10000,<br /> United States
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-xl mt-1 text-black shrink-0" />
              <div>
                <h4 className="text-lg font-semibold">Phone</h4>
                <p className="text-sm text-gray-700">Mobile: +(84) 546-6789</p>
                <p className="text-sm text-gray-700">Hotline: +(84) 456-6789</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaClock className="text-xl mt-1 text-black shrink-0" />
              <div>
                <h4 className="text-lg font-semibold">Working Time</h4>
                <p className="text-sm text-gray-700">Mon–Fri: 9:00 - 22:00</p>
                <p className="text-sm text-gray-700">Sat–Sun: 9:00 - 21:00</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">Your name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Abc"
                className="w-full border border-[#9F9F9F] rounded px-4 py-2 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="abc@domain.com"
                className="w-full border border-[#9F9F9F] rounded px-4 py-2 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="This is optional"
                className="w-full border border-[#9F9F9F] rounded px-4 py-2 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Hi! I’d like to ask about..."
                className="w-full border border-[#9F9F9F] rounded px-4 py-2 h-28 resize-none text-sm"
              />
            </div>

            <button
              type="submit"
              className="bg-[#B88E2F] text-white w-full sm:w-[237px] h-[50px] text-sm font-medium rounded hover:bg-yellow-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Quality Component */}
      <div className="mt-16">
        <Quality />
      </div>
    </>
  );
};

export default React.memo(Contact);
