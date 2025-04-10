/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link, NavLink } from "react-router-dom";

const MenuBar = () => {
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
              {/* <div className="py-[12px]">
                <Link
                  to="/dashboard"
                  className="px-[16px] py-[8px] bg-purple-700 text-white rounded-md"
                >
                  Dashboard
                </Link>
              </div> */}
              <div className="py-[12px]">
                <Link
                  to="/login"
                  className="px-[16px] py-[8px] bg-purple-700 text-white rounded-md"
                >
                  Login
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuBar;
