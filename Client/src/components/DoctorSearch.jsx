/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DoctorSearch = () => {
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
      
      const response = await axios.get(
        `http://localhost:3030/api/search?query=${searchTerm}`
      );
      setDoctor(response.data.result.data);
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className="container mx-auto p-6">
        <div className="mb-6">
          <div className="flex justify-center">
            <input
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              placeholder="Search by doctor name or specialty"
              className="p-3 border border-gray-300 rounded-md w-1/2"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctor.map((doctorItem) => (
            <Link
              to={`/doctors/${doctorItem._id}`}
              key={doctorItem._id}
              className="border rounded-lg p-6 shadow-lg bg-white transition-transform hover:scale-105 hover:shadow-xl"
            >
              <div className="text-center">
                <h3 className="text-xl font-semibold text-blue-600">
                  {doctorItem.name}
                </h3>
                <p className="text-gray-600">{doctorItem.specialty}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default DoctorSearch;
