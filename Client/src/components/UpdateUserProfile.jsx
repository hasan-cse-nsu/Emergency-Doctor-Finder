/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const UpdateUserProfile = () => {
  const BaseURL = "https://emergency-doctor-finder.onrender.com/api";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      fetchUserData(token);
    }
  }, []);

  const fetchUserData = async (token) => {
    try {
      const res = await axios.get(BaseURL + "/user/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setForm(res.data.result.data);
    } catch (err) {
      toast.error("Failed to load user data.");
    }
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleUpdate = async () => {
    try {
      await axios.put(
        BaseURL + "/user/update",
        {
          name: form.name,
          phone: form.phone,
          location: form.location,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      toast.success("✅ Profile updated successfully!");
    } catch (err) {
      toast.error("❌ Failed to update profile.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-8">
          Update Profile
        </h2>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email (read-only)
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              disabled
              className="w-full mt-1 px-4 py-2 bg-gray-100 border border-gray-300 rounded-md cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <Link
            to="/"
            onClick={handleUpdate}
            className="px-[135px] py-[9px] bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Save Changes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpdateUserProfile;
