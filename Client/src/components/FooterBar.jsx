/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";

const FooterBar = () => {
  return (
    <footer className="bg-gray-800 h-[60px] flex items-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-[30px]">
          <div className="col-span-4">
            <p className="text-white text-[20px] mx-10">Footer Section</p>
          </div>
          <div className="col-span-4">
            <p className="text-white text-[20px] mx-10">
              © 2025 Rashidul Hasan. All rights reserved.
            </p>
          </div>
          <div className="col-span-4">
            <div className="flex gap-[15px] justify-end mx-10">
              <Link to="#" className="text-white text-[18px]">
                <FaFacebookSquare />
              </Link>
              <Link to="#" className="text-white text-[18px]">
                <FaTwitterSquare />
              </Link>
              <Link to="#" className="text-white text-[18px]">
                <FaInstagramSquare />
              </Link>
              <Link to="#" className="text-white text-[18px]">
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;
