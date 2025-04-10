/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SpecialtySearch = () => {
  const [specialties, setSpecialties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchSpecialties();
  }, []);

  const fetchSpecialties = async () => {
    try {
      const response = await axios.get("http://localhost:3030/api/specialties");
      setSpecialties(response.data.result);
    } catch (error) {
      console.error("Error fetching specialties:", error);
    }
  };

  const handleSpecialtyClick = (specialty) => {
    navigate(`/specialty/${specialty}`);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {specialties.map((specialty, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 shadow-lg bg-white cursor-pointer transition-transform hover:scale-105 hover:shadow-xl"
            onClick={() => handleSpecialtyClick(specialty)}
          >
            <h3 className="text-xl font-semibold text-blue-600 text-center">
              {specialty}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialtySearch;
