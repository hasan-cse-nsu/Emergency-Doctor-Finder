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
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Doctors in {specialty}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.length === 0 ? (
          <p>No doctors found for this specialty</p>
        ) : (
          doctors.map((doctor) => (
            <Link
              to={`/doctors/${doctor._id}`}
              key={doctor._id}
              className="border rounded-lg p-6 shadow-lg bg-white"
            >
              <div className="text-center">
                <h3 className="text-xl font-semibold text-blue-600">
                  {doctor.name}
                </h3>
                <p className="text-gray-600">{doctor.specialty}</p>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default DoctorsBySpecialty;
