/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const MenuBar = () => {
  const BaseURL = "https://emergency-doctor-finder.onrender.com/api";

  const [user, setUser] = useState(null);
  const [doctor, setDoctor] = useState(null);
  const [admin, setAdmin] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);

  const navigate = useNavigate();

  const [openDropdown, setOpenDropdown] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setDoctor(null);
    navigate("/");
  };

  const handleAdminLogout = () => {
    localStorage.removeItem("adminToken");
    setAdmin(null);
    navigate("/");
  };

  const handleOpenSidebar = async () => {
    setShowSidebar(true);
    try {
      await axios.put(
        BaseURL + "/doctor/notifications/read",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    } catch (err) {
      console.error("Failed to mark notifications as read");
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const res = await axios.get(BaseURL + "/user/me", {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser(res.data.result.data);
        } catch (err) {
          localStorage.removeItem("token");
        }
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    const fetchDoctor = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const res = await axios.get(BaseURL + "/doctor/me", {
            headers: { Authorization: `Bearer ${token}` },
          });
          setDoctor(res.data.result.data);

          const noteRes = await axios.get(
            "http://localhost:3030/api/doctor/notifications",
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          setNotifications(noteRes.data.result.data);
        } catch (err) {
          localStorage.removeItem("token");
        }
      }
    };
    fetchDoctor();
  }, []);

  useEffect(() => {
    const fetchAdmin = async () => {
      const token = localStorage.getItem("adminToken");
      if (token) {
        try {
          const res = await axios.get(BaseURL + "/admin/me", {
            headers: { Authorization: `Bearer ${token}` },
          });
          setAdmin(res.data.result.data);
        } catch (err) {
          localStorage.removeItem("adminToken");
        }
      }
    };
    fetchAdmin();
  }, []);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="col-span-2">
          <Link to="/" className="text-2xl font-bold text-blue-700">
            DrFinder
          </Link>
        </div>

        <div className="col-span-6">
          <nav className="flex justify-center">
            <ul className="flex gap-4 py-2">
              {[
                { to: "/", label: "Home" },
                { to: "/doctors", label: "Doctors" },
                { to: "/about", label: "About" },
                { to: "/contact", label: "Contact" },
              ].map(({ to, label }) => (
                <li key={label}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `px-5 py-2 rounded-md text-sm font-medium transition duration-200 ${
                        isActive
                          ? "bg-blue-700 text-white shadow-md"
                          : "bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="col-span-4">
          <nav className="flex justify-center gap-[30px]">
            <div className="py-[12px] relative">
              {user ? (
                <div className="flex items-center space-x-4">
                  <Link
                    to="/dashboard"
                    className="inline-flex justify-center items-center gap-2 px-4 py-2 bg-blue-700 text-white text-sm font-medium rounded-md hover:bg-blue-800 focus:outline-none"
                  >
                    Dashboard
                  </Link>

                  <div
                    className="relative inline-block text-left"
                    onMouseLeave={() => setOpenDropdown(false)}
                  >
                    <button
                      onClick={() => setOpenDropdown(!openDropdown)}
                      className="inline-flex justify-center items-center gap-2 w-full px-4 py-2 bg-blue-700 text-white text-sm font-medium rounded-md hover:bg-blue-800 focus:outline-none"
                    >
                      {user.name}
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          openDropdown ? "rotate-180" : "rotate-0"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    <div
                      className={`absolute right-0 w-44 bg-white border border-gray-200 rounded-md shadow-lg z-50 ${
                        openDropdown ? "block" : "hidden"
                      }`}
                    >
                      <Link
                        to="/updateUser"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        ✏️ Update Profile
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                      >
                        🚪 Logout
                      </button>
                    </div>
                  </div>
                </div>
              ) : doctor ? (
                <div className="flex items-center space-x-4">
                  <Link
                    to="/doctor/dashboard"
                    className="inline-flex justify-center items-center gap-2 px-4 py-2 bg-blue-700 text-white text-sm font-medium rounded-md hover:bg-blue-800 focus:outline-none"
                  >
                    Dashboard
                  </Link>

                  <div
                    className="relative inline-block text-left"
                    onMouseLeave={() => setOpenDropdown(false)}
                  >
                    <button
                      onClick={() => setOpenDropdown(!openDropdown)}
                      className="inline-flex justify-center items-center gap-2 w-full px-4 py-2 bg-blue-700 text-white text-sm font-medium rounded-md hover:bg-blue-800 focus:outline-none"
                    >
                      {doctor.name}
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          openDropdown ? "rotate-180" : "rotate-0"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    <div
                      className={`absolute right-0 w-44 bg-white border border-gray-200 rounded-md shadow-lg z-50 ${
                        openDropdown ? "block" : "hidden"
                      }`}
                    >
                      <Link
                        to="/UpdateDoctor"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        ✏️ Update Doctor Profile
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                      >
                        🚪 Logout
                      </button>
                    </div>
                  </div>

                  <div className="relative">
                    <button
                      onClick={handleOpenSidebar}
                      className="relative p-2 rounded-full hover:bg-gray-200 transition"
                    >
                      <svg
                        className="w-6 h-6 text-black"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                      </svg>

                      {notifications.some((n) => !n.read) && (
                        <span className="absolute top-0 right-0 block w-3 h-3 bg-red-600 rounded-full ring-2 ring-white"></span>
                      )}
                    </button>
                  </div>
                </div>
              ) : admin ? (
                <div className="flex items-center space-x-4">
                  <Link
                    to="/admin/dashboard"
                    className="inline-flex justify-center items-center gap-2 px-4 py-2 bg-blue-700 text-white text-sm font-medium rounded-md hover:bg-blue-800 focus:outline-none"
                  >
                    Dashboard
                  </Link>

                  <div
                    className="relative inline-block text-left"
                    onMouseLeave={() => setOpenDropdown(false)}
                  >
                    <button
                      onClick={() => setOpenDropdown(!openDropdown)}
                      className="inline-flex justify-center items-center gap-2 w-full px-4 py-2 bg-blue-700 text-white text-sm font-medium rounded-md hover:bg-blue-800 focus:outline-none"
                    >
                      {admin.name}
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          openDropdown ? "rotate-180" : "rotate-0"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    <div
                      className={`absolute right-0 w-44 bg-white border border-gray-200 rounded-md shadow-lg z-50 ${
                        openDropdown ? "block" : "hidden"
                      }`}
                    >
                      <button
                        onClick={handleAdminLogout}
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                      >
                        🚪 Logout
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <div
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(true)}
                    onMouseLeave={() => setOpenDropdown(false)}
                  >
                    <button className="px-[16px] py-[8px] bg-blue-700 text-white rounded-md hover:bg-blue-800">
                      Log in
                    </button>
                    <div
                      className={`absolute right-0 w-48 bg-white border border-gray-200 rounded-lg shadow-xl z-50 transition-all duration-200 ${
                        openDropdown ? "block" : "hidden"
                      }`}
                    >
                      <Link
                        to="/login"
                        className="block px-4 py-3 text-blue-600 hover:bg-blue-50 text-center font-medium border-b border-gray-200"
                      >
                        👤 Log in
                      </Link>
                      <Link
                        to="/doctor/login"
                        className="block px-4 py-3 text-blue-700 hover:bg-blue-50 text-center font-medium"
                      >
                        🩺 As a Doctor
                      </Link>
                    </div>
                  </div>

                  <div>
                    <Link
                      to="/admin/login"
                      className="px-5 py-2 bg-gray-800 text-white rounded-md font-medium hover:bg-gray-900 transition duration-200 shadow-sm"
                    >
                      Admin
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {showSidebar && (
            <div className="fixed top-0 right-0 z-50 w-80 h-full bg-white p-4 shadow-lg transform transition-transform duration-300 translate-x-0">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold">Notifications</h3>
                <button
                  onClick={() => setShowSidebar(false)}
                  className="text-gray-500 hover:text-black"
                >
                  ✖
                </button>
              </div>
              <ul className="space-y-3 overflow-y-auto h-[90%]">
                {notifications.length === 0 ? (
                  <p className="text-sm text-gray-500">No notifications</p>
                ) : (
                  notifications.map((note, index) => (
                    <li
                      key={index}
                      className="p-3 bg-gray-100 rounded-md text-sm text-gray-700"
                    >
                      {note.message}
                      <div className="text-xs text-gray-400 mt-1">
                        {new Date(note.date).toLocaleString()}
                      </div>
                    </li>
                  ))
                )}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default MenuBar;
