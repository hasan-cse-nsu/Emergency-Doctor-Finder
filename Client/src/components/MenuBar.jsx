/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const MenuBar = () => {
  const [user, setUser] = useState(null);
  const [doctor, setDoctor] = useState(null);

  const navigate = useNavigate();

  const [openDropdown, setOpenDropdown] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setDoctor(null);
    navigate("/");
  };

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const res = await axios.get("http://localhost:3030/api/user/me", {
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
          const res = await axios.get("http://localhost:3030/api/doctor/me", {
            headers: { Authorization: `Bearer ${token}` },
          });
          setDoctor(res.data.result.data);
          console.log(res.data.result.data);
        } catch (err) {
          localStorage.removeItem("token");
        }
      }
    };
    fetchDoctor();
  }, []);

  return (
    <section className="bg-white shadow-xl h-[80px] flex items-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-[30px]">
          <div className="col-span-2">
            <div className="logo flex justify-end">
              <img
                className="w-[60px] h-[60px]"
                src="images/blog_3959542.png"
                alt=""
              />
            </div>
          </div>

          <div className="col-span-6">
            <nav className="flex justify-center">
              <ul className="flex py-[10px]">
                <li className="px-[16px] py-[8px] rounded-md">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "px-[16px] py-[8px] bg-gray-700 text-white rounded-md"
                        : "px-[16px] py-[8px] bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                    }
                  >
                    Home
                  </NavLink>
                </li>

                <li className="px-[16px] py-[8px] rounded-md">
                  <NavLink
                    to="/doctors"
                    className={({ isActive }) =>
                      isActive
                        ? "px-[16px] py-[8px] bg-gray-700 text-white rounded-md"
                        : "px-[16px] py-[8px] bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                    }
                  >
                    Doctors
                  </NavLink>
                </li>

                <li className="px-[16px] py-[8px] rounded-md">
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive
                        ? "px-[16px] py-[8px] bg-gray-700 text-white rounded-md"
                        : "px-[16px] py-[8px] bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                    }
                  >
                    About
                  </NavLink>
                </li>

                <li className="px-[16px] py-[8px] rounded-md">
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive
                        ? "px-[16px] py-[8px] bg-gray-700 text-white rounded-md"
                        : "px-[16px] py-[8px] bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                    }
                  >
                    Contact
                  </NavLink>
                </li>
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
                      className="inline-flex justify-center items-center gap-2 px-4 py-2 bg-purple-700 text-white text-sm font-medium rounded-md hover:bg-purple-800 focus:outline-none"
                    >
                      Dashboard
                    </Link>

                    <div className="relative inline-block text-left">
                      <button
                        onClick={() => setOpenDropdown(!openDropdown)}
                        className="inline-flex justify-center items-center gap-2 w-full px-4 py-2 bg-purple-700 text-white text-sm font-medium rounded-md hover:bg-purple-800 focus:outline-none"
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

                      {openDropdown && (
                        <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-md shadow-lg z-50">
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
                      )}
                    </div>
                  </div>
                ) : doctor ? (
                  <div className="flex items-center space-x-4">
                    <Link
                      to="/dashboard"
                      className="inline-flex justify-center items-center gap-2 px-4 py-2 bg-purple-700 text-white text-sm font-medium rounded-md hover:bg-purple-800 focus:outline-none"
                    >
                      Dashboard
                    </Link>

                    <div
                      className="relative inline-block text-left"
                      onMouseLeave={() => setOpenDropdown(false)}
                    >
                      <button
                        onClick={() => setOpenDropdown(!openDropdown)}
                        className="inline-flex justify-center items-center gap-2 w-full px-4 py-2 bg-purple-700 text-white text-sm font-medium rounded-md hover:bg-purple-800 focus:outline-none"
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
                          to="/updateUser"
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
                  </div>
                ) : (
                  <div
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(true)}
                    onMouseLeave={() => setOpenDropdown(false)}
                  >
                    <button className="px-[16px] py-[8px] bg-purple-700 text-white rounded-md hover:bg-purple-800">
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
                )}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuBar;
