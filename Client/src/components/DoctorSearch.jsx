/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DoctorSearch = () => {
  const BaseURL = "https://emergency-doctor-finder.onrender.com/api";

  const [doctor, setDoctor] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm === "") {
      setDoctor([]);
    } else {
      fetchDoctors();
    }
  }, [searchTerm]);

  const fetchDoctors = async () => {
    try {
      const response = await axios.get(`${BaseURL}/search?query=${searchTerm}`);
      setDoctor(response.data.result.data);
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 text-center mb-10">
          Search Doctors
        </h2>

        <div className="flex justify-center mb-10">
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Search by doctor name or specialty"
            className="w-full md:w-1/2 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctor.map((doctorItem) => (
            <Link
              to={`/doctors/${doctorItem._id}`}
              key={doctorItem._id}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition transform hover:scale-105 text-center"
            >
              <img
                src={doctorItem.image || "/images/default-doc.png"}
                alt={doctorItem.name}
                className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border"
              />
              <h3 className="text-xl font-semibold text-blue-700">
                {doctorItem.name}
              </h3>
              <p className="text-gray-500">{doctorItem.specialty}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorSearch;
