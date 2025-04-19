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
    return <p>Loading doctor details...</p>;
  }

  return (
    <div className="doctor-detail">
      <h2>{doctor.name}</h2>

      <img src={doctor.image} alt={doctor.name} className="doctor-detail-img" />

      <p>
        <strong>Specialty:</strong> {doctor.specialty}
      </p>

      <p>
        <strong>Location:</strong> {doctor.location}
      </p>

      <a href={`tel:${doctor.contact}`} className="doctor-contact-btn">
        Contact Doctor
      </a>

      <div className="mt-2 flex flex-col items-center">
        <button
          onClick={() => setShowAvailability(!showAvailability)}
          className="text-blue-600 font-semibold hover:underline mt-2"
        >
          {showAvailability ? "Hide Availability ▲" : "Show Availability ▼"}
        </button>
        {showAvailability && (
          <ul className="mt-2 list-disc text-gray-700 text-left">
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

      <p>
        <strong>Experience:</strong> {doctor.experience}
      </p>

      <button
        onClick={() => {
          setSelectedDoctorId(doctor._id);
          setShowModal(true);
        }}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-800"
      >
        Get Appointment
      </button>

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
