/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import Layout from "../Layout/Layout";

const DoctorDashboard = () => {

  const BaseURL = "https://emergency-doctor-finder.onrender.com/api";

  const [doctor, setDoctor] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return navigate("/doctor/login");

    axios
      .get(BaseURL + "/doctor/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setDoctor(res.data.result.data))
      .catch(() => {
        toast.error("Failed to load doctor info");
        navigate("/doctor/login");
      });
  }, [navigate]);

  return (
    <Layout>
      <div className="min-h-[calc(100vh-160px)] flex items-center justify-center bg-gray-100 px-4 py-12">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
            Doctor Dashboard
          </h2>

          <div className="grid grid-cols-1 gap-4 text-gray-700 text-sm mb-6">
            <div className="flex justify-center">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-32 h-32 rounded-full object-cover border shadow-sm"
              />
            </div>

            <div className="flex justify-between items-center bg-blue-50 px-4 py-2 rounded">
              <span className="font-semibold text-gray-600">Name:</span>
              <span>{doctor.name}</span>
            </div>
            <div className="flex justify-between items-center bg-blue-50 px-4 py-2 rounded">
              <span className="font-semibold text-gray-600">Email:</span>
              <span>{doctor.email}</span>
            </div>
            <div className="flex justify-between items-center bg-blue-50 px-4 py-2 rounded">
              <span className="font-semibold text-gray-600">Specialty:</span>
              <span>{doctor.specialty}</span>
            </div>
            <div className="flex justify-between items-center bg-blue-50 px-4 py-2 rounded">
              <span className="font-semibold text-gray-600">Phone:</span>
              <span>{doctor.contact || "Not provided"}</span>
            </div>
            <div className="flex justify-between items-center bg-blue-50 px-4 py-2 rounded">
              <span className="font-semibold text-gray-600">Location:</span>
              <span>{doctor.location || "Not set"}</span>
            </div>

            <div className="flex justify-between items-center bg-blue-50 px-4 py-2 rounded">
              <span className="font-semibold text-gray-600 block mb-1">
                Availability:
              </span>
              <ul className="list-disc list-inside text-gray-700">
                {Array.isArray(doctor.availability) &&
                doctor.availability.length > 0 ? (
                  doctor.availability.map((item, index) => (
                    <li key={index}>
                      <span className="font-medium">{item.day}:</span>{" "}
                      {item.slots || "Not specified"}
                    </li>
                  ))
                ) : (
                  <li className="text-sm text-gray-500">
                    No availability info
                  </li>
                )}
              </ul>
            </div>

            <div className="flex justify-between items-center bg-blue-50 px-4 py-2 rounded">
              <span className="font-semibold text-gray-600">Experience:</span>
              <span>{doctor.experience || "Not set"}</span>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <Link
              to="/UpdateDoctor"
              className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
            >
              ✏️ Edit Profile
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DoctorDashboard;
