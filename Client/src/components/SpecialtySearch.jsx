/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SpecialtySearch = () => {
  const BaseURL = "https://emergency-doctor-finder.onrender.com/api";

  const [specialties, setSpecialties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchSpecialties();
  }, []);

  const fetchSpecialties = async () => {
    try {
      const response = await axios.get(BaseURL + "/specialties");
      setSpecialties(response.data.result);
    } catch (error) {
      console.error("Error fetching specialties:", error);
    }
  };

  const handleSpecialtyClick = (specialty) => {
    navigate(`/specialty/${specialty}`);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 text-center mb-10">
          Browse by Specialty
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              onClick={() => handleSpecialtyClick(specialty)}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition transform hover:scale-105 cursor-pointer text-center"
            >
              <h3 className="text-xl font-semibold text-blue-700">
                {specialty}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialtySearch;
