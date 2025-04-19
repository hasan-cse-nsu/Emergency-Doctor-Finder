/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import Layout from "../Layout/Layout";

const DoctorDashboard = () => {
  const [doctor, setDoctor] = useState({});
  const navigate = useNavigate();

  // For getting Doctordata

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return navigate("/doctor/login");

    axios
      .get("http://localhost:3030/api/doctor/me", {
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
      <div className="min-h-[calc(100vh-160px)] flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-2xl">
          <h2 className="text-3xl font-bold mb-4 text-center text-blue-700">
            Doctor Dashboard
          </h2>

          <div className="grid grid-cols-1 gap-4 text-gray-700 text-base">
            <div>
              <strong>Name:</strong> {doctor.name}
            </div>
            <div>
              <strong>Email:</strong> {doctor.email}
            </div>
            <div>
              <strong>Specialty:</strong> {doctor.specialty}
            </div>
            <div>
              <strong>Phone:</strong> {doctor.contact || "Not provided"}
            </div>
            <div>
              <strong>location:</strong> {doctor.location || "Not set"}
            </div>
            <div>
              <strong>availability:</strong> {doctor.availability || "Not set"}
            </div>
            <div>
              <strong>experience:</strong> {doctor.experience || "Not set"}
            </div>
            <div>
              <strong>Image:</strong> {doctor.image || "Not set"}
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <Link
              to="/UpdateDoctor"
              className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700"
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
