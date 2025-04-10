/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAllDoctors } from "../apiRequest/api";

const DoctorDetail = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState([]);

  useEffect(() => {
    (async () => {
      let res = await getAllDoctors();
      const drData = res.filter((dr) => dr._id === id);
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
      <p>
        <strong>Availability:</strong> {doctor.availability}
      </p>
      <p>
        <strong>Experience:</strong> {doctor.experience}
      </p>
    </div>
  );
};

export default DoctorDetail;
