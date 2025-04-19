/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";
import { Link } from "react-router-dom";

const DoctorList = ({ doctors }) => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 text-center mb-10">
          Available Doctors
        </h2>

        {doctors.length === 0 ? (
          <p className="text-center text-gray-600">No doctors found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((doctor) => (
              <div
                key={doctor._id}
                className="bg-white p-6 rounded-lg shadow hover:shadow-md transition duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={doctor.image || "/images/default-doc.png"}
                    alt={doctor.name}
                    className="w-16 h-16 rounded-full object-cover border"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-blue-800">
                      {doctor.name}
                    </h3>
                    <p className="text-sm text-gray-500">{doctor.specialty}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-2">
                  <strong>Location:</strong> {doctor.location}
                </p>
                <p className="text-gray-700 text-sm mb-4">
                  <strong>Experience:</strong> {doctor.experience}
                </p>

                <Link
                  to={`/doctors/${doctor._id}`}
                  className="inline-block w-full text-center bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition"
                >
                  View Profile
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default DoctorList;
