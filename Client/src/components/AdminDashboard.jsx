/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Layout from "../Layout/Layout";

const AdminDashboard = () => {
  const [pendingDoctors, setPendingDoctors] = useState([]);

  const fetchPendingDoctors = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3030/api/admin/doctors/pending",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
          },
        }
      );
      setPendingDoctors(res.data.result.data);
    } catch (err) {
      toast.error("Failed to fetch doctors");
    }
  };

  const approveDoctor = async (id) => {
    try {
      await axios.put(
        `http://localhost:3030/api/admin/approve-doctor/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
          },
        }
      );
      toast.success("Doctor approved");
      fetchPendingDoctors();
    } catch (err) {
      toast.error("Failed to approve doctor");
    }
  };

  useEffect(() => {
    fetchPendingDoctors();
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">
          Admin Dashboard
        </h1>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-md shadow">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Specialty</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {pendingDoctors.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center py-6 text-gray-500">
                    No pending doctors
                  </td>
                </tr>
              ) : (
                pendingDoctors.map((doc) => (
                  <tr key={doc._id} className="border-t hover:bg-gray-50">
                    <td className="py-3 px-4">{doc.name}</td>
                    <td className="py-3 px-4">{doc.specialty}</td>
                    <td className="py-3 px-4">{doc.email}</td>
                    <td className="py-3 px-4 text-center">
                      <button
                        onClick={() => approveDoctor(doc._id)}
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                      >
                        Approve
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
