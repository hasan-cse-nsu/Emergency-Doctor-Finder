/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const DoctorSignupForm = () => {
  const BaseURL = "https://emergency-doctor-finder.onrender.com/api";

  const [form, setForm] = useState({
    name: "",
    email: "",
    specialty: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(BaseURL + "/doctor/signup", form);
      toast.success("✅ Registration successful! You can now log in.");
      setTimeout(() => navigate("/doctor/login"), 1500);
    } catch (err) {
      toast.error(
        err.response?.data?.msg || "❌ Something went wrong! Please try again."
      );
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Doctor Sign Up</h2>
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <input
          name="specialty"
          placeholder="Specialty"
          onChange={handleChange}
          className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <div className="mb-6">
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default DoctorSignupForm;
