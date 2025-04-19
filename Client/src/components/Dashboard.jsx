/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import Layout from "../Layout/Layout";

const Dashboard = () => {
  const BaseURL = "https://emergency-doctor-finder.onrender.com/api";

  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return navigate("/login");

    axios
      .get(BaseURL + "/user/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUser(res.data.result.data))
      .catch(() => {
        toast.error("Failed to load user info");
        navigate("/login");
      });
  }, [navigate]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return navigate("/login");

    axios
      .get(BaseURL + "/my-appointments", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setAppointments(res.data.result.data))
      .catch(() => toast.error("Failed to fetch appointments"));
  }, []);

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    try {
      const confirm = window.confirm("Do you want to delete this appointment?");
      if (!confirm) return;

      await axios.delete(`${BaseURL}/appointment/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAppointments((prev) => prev.filter((appt) => appt._id !== id));
      toast.success("Appointment deleted.");
    } catch (err) {
      toast.error("Failed to delete appointment.");
    }
  };

  const handleCancel = async (id) => {
    const token = localStorage.getItem("token");
    try {
      const confirm = window.confirm("Do you want to cancel this appointment?");
      if (!confirm) return;

      const res = await axios.put(
        `${BaseURL}/appointment/cancel/${id}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setAppointments((prev) =>
        prev.map((appt) =>
          appt._id === id ? { ...appt, status: "canceled" } : appt
        )
      );
      toast.success("Appointment canceled.");
    } catch (err) {
      toast.error("Failed to cancel appointment.");
    }
  };

  return (
    <Layout>
      <div className="min-h-[calc(100vh-160px)] flex items-center justify-center bg-gray-100 px-4 py-12">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
            User Dashboard
          </h2>

          <div className="grid grid-cols-1 gap-4 text-gray-700 text-sm mb-6 bg-blue-50 p-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-600">Name:</span>
              <span>{user.name}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-600">Email:</span>
              <span>{user.email}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-600">Phone:</span>
              <span>{user.phone || "Not provided"}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-600">Location:</span>
              <span>{user.location || "Not set"}</span>
            </div>
          </div>

          <div className="flex justify-center mb-8">
            <Link
              to="/updateUser"
              className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
            >
              ✏️ Edit Profile
            </Link>
          </div>

          <h3 className="text-xl font-semibold mb-4 text-blue-700">
            Your Appointments
          </h3>

          <ul className="space-y-4">
            {appointments.map((appt) => (
              <li
                key={appt._id}
                className="relative border p-4 rounded-lg bg-gray-50 shadow-md flex justify-between items-start"
              >
                <div>
                  <p>
                    <strong>Doctor:</strong> {appt.doctorId.name}
                  </p>
                  <p>
                    <strong>Specialty:</strong> {appt.doctorId.specialty}
                  </p>
                  <p>
                    <strong>Appointment On:</strong>{" "}
                    {new Date(appt.dateTime).toLocaleString()}
                  </p>

                  {appt.status === "canceled" ? (
                    <button
                      disabled
                      className="mt-2 bg-red-500 text-white px-4 py-1 rounded text-sm cursor-not-allowed"
                    >
                      Canceled
                    </button>
                  ) : (
                    <button
                      onClick={() => handleCancel(appt._id)}
                      className="mt-2 bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600 text-sm"
                    >
                      Cancel Appointment
                    </button>
                  )}
                </div>

                <button
                  onClick={() => handleDelete(appt._id)}
                  className="absolute top-2 right-2 text-red-600 hover:text-red-800 text-lg"
                  title="Delete Appointment"
                >
                  ✖
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
