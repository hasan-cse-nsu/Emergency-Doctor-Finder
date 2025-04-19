/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import { getAllDoctors } from "../apiRequest/api";
import AppointmentModal from "../components/AppointmentModal";

const DoctorDetail = (props) => {
  const [doctor, setDoctor] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedDoctorId, setSelectedDoctorId] = useState(null);
  const [showAvailability, setShowAvailability] = useState(false);

  useEffect(() => {
    (async () => {
      let res = await getAllDoctors();
      const drData = res.filter((dr) => dr._id === props.id);
      setDoctor(drData[0]);
    })();
  }, []);

  if (!doctor) {
    return (
      <p className="text-center text-gray-500 mt-10">
        Loading doctor details...
      </p>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <div className="flex flex-col items-center text-center">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-32 h-32 rounded-full object-cover mb-4 border shadow-sm"
        />
        <h2 className="text-2xl font-bold text-blue-700 mb-2">{doctor.name}</h2>
        <p className="text-gray-600 mb-1">
          <strong>Specialty:</strong> {doctor.specialty}
        </p>
        <p className="text-gray-600 mb-1">
          <strong>Location:</strong> {doctor.location}
        </p>
        <p className="text-gray-600 mb-1">
          <strong>Experience:</strong> {doctor.experience}
        </p>

        <a
          href={`tel:${doctor.contact}`}
          className="mt-3 bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded-md transition"
        >
          📞 Contact Doctor
        </a>

        <div className="mt-6 w-full">
          <button
            onClick={() => setShowAvailability(!showAvailability)}
            className="text-blue-600 font-semibold hover:underline"
          >
            {showAvailability ? "Hide Availability ▲" : "Show Availability ▼"}
          </button>

          {showAvailability && (
            <ul className="mt-3 text-left text-gray-700 list-disc ml-6">
              {Array.isArray(doctor.availability) &&
              doctor.availability.length > 0 ? (
                doctor.availability.map((item, index) => (
                  <li key={index}>
                    <span className="font-medium">{item.day}:</span>{" "}
                    {item.slots || "Not specified"}
                  </li>
                ))
              ) : (
                <li className="text-sm text-gray-500">No availability info</li>
              )}
            </ul>
          )}
        </div>

        <button
          onClick={() => {
            setSelectedDoctorId(doctor._id);
            setShowModal(true);
          }}
          className="mt-6 bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2 rounded-md transition"
        >
          📅 Get Appointment
        </button>
      </div>

      {showModal && (
        <AppointmentModal
          doctorId={selectedDoctorId}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default DoctorDetail;
