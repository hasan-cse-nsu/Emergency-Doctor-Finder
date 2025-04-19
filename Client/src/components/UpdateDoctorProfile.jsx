/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const UpdateDoctorProfile = () => {
  const BaseURL = "https://emergency-doctor-finder.onrender.com/api";

  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    location: "",
    specialty: "",
    availability: [{ day: "", slots: "" }],
    experience: "",
    image: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/doctor/login");
    } else {
      fetchDoctorData(token);
    }
  }, []);

  const fetchDoctorData = async (token) => {
    try {
      const res = await axios.get(BaseURL + "/doctor/me", {
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
        BaseURL + "/doctor/update",
        {
          name: form.name,
          email: form.email,
          contact: form.contact,
          location: form.location,
          specialty: form.specialty,
          availability: form.availability,
          experience: form.experience,
          image: form.image,
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

  const handleAvailabilityChange = (index, field, value) => {
    const updated = [...form.availability];
    updated[index][field] = value;
    setForm({ ...form, availability: updated });
  };

  const handleAddAvailability = () => {
    setForm({
      ...form,
      availability: [...form.availability, { day: "", slots: "" }],
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-8">
          Update Doctor Profile
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
              name="contact"
              value={form.contact}
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

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Specialty
            </label>
            <input
              type="text"
              name="specialty"
              value={form.specialty}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Availability
            </label>
            {form.availability.map((a, index) => (
              <div key={index} className="flex items-center space-x-4 mb-3">
                <input
                  type="text"
                  name="day"
                  placeholder="Day (e.g., Monday)"
                  value={a.day}
                  onChange={(e) =>
                    handleAvailabilityChange(index, "day", e.target.value)
                  }
                  className="w-1/2 px-3 py-2 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  name="slots"
                  placeholder="e.g., 10:00 AM - 2:00 PM"
                  value={a.slots}
                  onChange={(e) =>
                    handleAvailabilityChange(index, "slots", e.target.value)
                  }
                  className="w-1/2 px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
            ))}

            <button
              type="button"
              onClick={handleAddAvailability}
              className="text-blue-600 text-sm mt-2"
            >
              + Add More Availability
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Experience
            </label>
            <input
              type="text"
              name="experience"
              value={form.experience}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Image
            </label>
            <input
              type="text"
              name="image"
              value={form.image}
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

export default UpdateDoctorProfile;
