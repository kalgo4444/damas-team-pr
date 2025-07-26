import React, { useState } from "react";
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
    const updated = { ...formData, [name]: value };
    setFormData(updated);
    console.log(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 mt-[100px]">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Get In Touch With Us</h2>
        <p className="text-[#9F9F9F] leading-relaxed max-w-2xl mx-auto">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us
          <br /> An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-xl mt-1 text-black" />
            <div>
              <h4 className="text-lg font-semibold">Address</h4>
              <p>
                236 5th SE Avenue, New
                <br /> York NY10000, United
                <br /> States
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-xl mt-1 text-black" />
            <div>
              <h4 className="text-lg font-semibold">Phone</h4>
              <p>Mobile: +(84) 546-6789</p>
              <p>Hotline: +(84) 456-6789</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaClock className="text-xl mt-1 text-black" />
            <div>
              <h4 className="text-lg font-semibold">Working Time</h4>
              <p>
                Monday–Friday: 9:00 -<br /> 22:00
              </p>
              <p>
                Saturday–Sunday: 9:00 -<br /> 21:00
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">Your name</label><br />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Abc"
              className="w-full border border-[#9F9F9F] rounded px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Email address
            </label><br />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Abc@def.com"
              className="w-full border-[#9F9F9F] border rounded px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Subject</label><br />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="This is an optional"
              className="w-full border border-[#9F9F9F] rounded px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label><br />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Hi! I’d like to ask about..."
              className="w-full border border-[#9F9F9F] rounded px-4 py-2 h-24 resize-none"
            />
          </div>

          <button
            type="submit"
            className="bg-[#B88E2F] w-[237px] h-[55px] text-white px-6 py-2 rounded hover:bg-yellow-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
