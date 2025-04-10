/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("blog");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <div className="w-64 bg-gray-800 text-white p-5">
          <h1 className="text-2xl font-bold text-center mb-6">Dashboard</h1>
          <ul>
            <li
              onClick={() => handleTabChange("blog")}
              className={`py-2 px-4 cursor-pointer ${
                activeTab === "blog" ? "bg-gray-700" : ""
              }`}
            >
              Blog
            </li>
            <li
              onClick={() => handleTabChange("team")}
              className={`py-2 px-4 cursor-pointer ${
                activeTab === "team" ? "bg-gray-700" : ""
              }`}
            >
              Team
            </li>
            <li
              onClick={() => handleTabChange("service")}
              className={`py-2 px-4 cursor-pointer ${
                activeTab === "service" ? "bg-gray-700" : ""
              }`}
            >
              Service
            </li>
          </ul>
        </div>

        <div className="flex-1 p-6">
          <h2 className="text-3xl font-semibold mb-6">
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
          </h2>

          {activeTab === "blog" && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Manage Blogs</h3>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Id</label>
                  <input
                    type="number"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Title</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Image</label>
                  <input
                    type="file"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Short</label>
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-md"
                    rows="4"
                  ></textarea>
                </div>
                <div className="flex justify-between">
                  <button className="bg-blue-500 text-white px-6 py-2 rounded-md">
                    Create Blog
                  </button>
                  <button className="bg-red-500 text-white px-6 py-2 rounded-md">
                    Delete Blog
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "team" && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Manage Team</h3>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">
                    Designation
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Image</label>
                  <input
                    type="file"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Short</label>
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-md"
                    rows="4"
                  ></textarea>
                </div>
                <div className="flex justify-between">
                  <button className="bg-blue-500 text-white px-6 py-2 rounded-md">
                    Add Team Member
                  </button>
                  <button className="bg-red-500 text-white px-6 py-2 rounded-md">
                    Delete Team Member
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "service" && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Manage Services</h3>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Icon</label>
                  <input
                    type="file"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Title</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Short</label>
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-md"
                    rows="4"
                  ></textarea>
                </div>
                <div className="flex justify-between">
                  <button className="bg-blue-500 text-white px-6 py-2 rounded-md">
                    Add Service
                  </button>
                  <button className="bg-red-500 text-white px-6 py-2 rounded-md">
                    Delete Service
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
