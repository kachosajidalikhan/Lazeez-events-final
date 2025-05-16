import React, { useState } from "react";
import { User, Phone, Mail, MapPin, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Loader2 } from "lucide-react"; // Spinner icon

export default function ContactForm() {
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);


  const [formData, setFormData] = useState({

    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/submissions/submit`, formData); // 🔁 Update this URL to your backend endpoint
      console.log("Form submitted:", res.data);
  
      nav('/Thank-You-Section');
  
      setFormData({
        name: "",
        phone: "",
        email: "",
        address: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-6 py-10">
      <h1 className="text-3xl sm:text-5xl md:text-6xl Poppins-bold text-white mb-8 text-center">
        Contact Us
      </h1>

      <div className="bg-white rounded-[40px] sm:rounded-[60px] md:rounded-[89px] px-6 sm:px-10 md:px-16 py-10 w-full max-w-4xl shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              icon={<User className="h-5 w-5 text-[#ED004F] mr-2" />}
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <InputField
              icon={<Phone className="h-5 w-5 text-[#ED004F] mr-2" />}
              type="number"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              icon={<Mail className="h-5 w-5 text-[#ED004F] mr-2" />}
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <InputField
              icon={<MapPin className="h-5 w-5 text-[#ED004F] mr-2" />}
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div className="relative" style={{backgroundImage:"url('your-image-url-here')"}}>
            <div className="flex bg-[#F1BBBB] rounded-md p-3">
              <MessageSquare className="h-6 w-6 text-[#ED004F] mr-2 mt-1" />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className=" w-full outline-none text-[#ED004F] placeholder-[#ED004F] resize-none pl-3 text-sm sm:text-base"
                required
              />
            </div>
          </div>

          <div className="flex justify-center">
          <button
              type="submit"
              disabled={loading}
              className={`w-1/2 flex justify-center items-center gap-2 rounded-[12px] Poppins-bold bg-[#ED004FB0] py-3 font-medium text-white transition hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 ${
                loading ? "opacity-60 cursor-not-allowed" : ""
              }`}
            >
              {loading && <Loader2 className="h-5 w-5 animate-spin" />}
              {loading ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function InputField({ icon, type, name, placeholder, value, onChange }) {
  return (
    <div className="relative">
      <div className="flex items-center bg-[#F1BBBB] rounded-md p-3">
        {icon}
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="bg-transparent w-full outline-none text-[#ED004F] placeholder-[#ED004F] pl-3 text-sm sm:text-base"
          required
        />
      </div>
    </div>
  );
}
