/* eslint-disable no-unused-vars */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const DoctorsBySpecialty = () => {
  const { specialty } = useParams();
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchDoctorsBySpecialty();
  }, [specialty]);

  const fetchDoctorsBySpecialty = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3030/api/search?query=${specialty}`
      );
      setDoctors(response.data.result.data);
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 text-center mb-10">
          {specialty} Specialists
        </h2>

        {doctors.length === 0 ? (
          <p className="text-center text-gray-600">
            No doctors found for this specialty
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((doctor) => (
              <Link
                to={`/doctors/${doctor._id}`}
                key={doctor._id}
                className="bg-white rounded-lg shadow hover:shadow-md p-6 transition duration-300 flex flex-col items-center text-center"
              >
                <img
                  src={doctor.image || "/images/default-doc.png"}
                  alt={doctor.name}
                  className="w-20 h-20 rounded-full object-cover border mb-4"
                />
                <h3 className="text-xl font-semibold text-blue-800">
                  {doctor.name}
                </h3>
                <p className="text-gray-500 text-sm">{doctor.specialty}</p>
                <p className="text-gray-500 text-sm mt-1">{doctor.location}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorsBySpecialty;
