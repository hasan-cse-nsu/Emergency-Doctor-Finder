/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const FooterBar = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">
            Emergency Doctor Finder
          </h2>
          <p className="text-gray-300 text-sm">
            A trusted platform to instantly find and connect with verified
            doctors during emergencies. Helping you save time when every second
            counts.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-white">
                User Login
              </Link>
            </li>
            <li>
              <Link to="/doctor/login" className="hover:text-white">
                Doctor Login
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Contact Us</h3>
          <p className="text-gray-300 text-sm mb-1">
            Email: support@drfinder.com
          </p>
          <p className="text-gray-300 text-sm mb-1">Phone: +880 1234-567890</p>
          <p className="text-gray-300 text-sm">Location: Dhaka, Bangladesh</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white text-xl">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-300 hover:text-white text-xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-300 hover:text-white text-xl">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-gray-300 hover:text-white text-xl">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-700 mt-8 pt-4 text-center text-gray-400 text-xs">
        &copy; {new Date().getFullYear()} Emergency Doctor Finder. All rights
        reserved.
      </div>
    </footer>
  );
};

export default FooterBar;
