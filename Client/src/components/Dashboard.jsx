/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import Layout from "../Layout/Layout";

const Dashboard = () => {
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  const [appointments, setAppointments] = useState([]);

  // For getting Userdata

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return navigate("/login");

    axios
      .get("http://localhost:3030/api/user/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUser(res.data.result.data))
      .catch(() => {
        toast.error("Failed to load user info");
        navigate("/login");
      });
  }, [navigate]);

  // For getting Appointments

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return navigate("/login");

    axios
      .get("http://localhost:3030/api/my-appointments", {
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

      await axios.delete(`http://localhost:3030/api/appointment/${id}`, {
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
        `http://localhost:3030/api/appointment/cancel/${id}`,
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
      <div className="min-h-[calc(100vh-160px)] flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-2xl">
          <h2 className="text-3xl font-bold mb-4 text-center text-blue-700">
            User Dashboard
          </h2>

          <div className="grid grid-cols-1 gap-4 text-gray-700 text-base">
            <div>
              <strong>Name:</strong> {user.name}
            </div>
            <div>
              <strong>Email:</strong> {user.email}
            </div>
            <div>
              <strong>Phone:</strong> {user.phone || "Not provided"}
            </div>
            <div>
              <strong>Location:</strong> {user.location || "Not set"}
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <Link
              to="/updateUser"
              className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700"
            >
              ✏️ Edit Profile
            </Link>
          </div>

          <h3 className="text-xl font-semibold mb-2">Your Appointments</h3>

          <ul className="space-y-2">
            {appointments.map((appt) => (
              <li
                key={appt._id}
                className="relative border p-4 rounded bg-white shadow flex justify-between items-start"
              >
                <div>
                  <strong>Doctor: </strong> {appt.doctorId.name} <br />
                  <strong>Specialty: </strong> {appt.doctorId.specialty} <br />
                  <strong>Appointment Booked On: </strong>
                  {new Date(appt.dateTime).toLocaleString()}
                  <br />
                  {appt.status === "canceled" ? (
                    <button
                      disabled
                      className="mt-2 bg-red-600 text-white px-4 py-1 rounded text-sm cursor-not-allowed"
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
