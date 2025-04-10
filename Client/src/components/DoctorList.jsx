/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const DoctorList = (props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="container mx-auto my-16 p-9">
          <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4 gap-6 doctor-list">
            {props.list.map((item, index) => (
              <div className="doctor-card">
                <img
                  src={item["image"]}
                  alt={item["name"]}
                  className="doctor-card-img"
                />
                <div className="doctor-card-info">
                  <h3 className="doctor-card-name">{item["name"]}</h3>
                  <p className="doctor-card-specialty">{item["specialty"]}</p>
                  <p className="doctor-card-location">{item["location"]}</p>
                  <Link
                    to={`/doctors/${item._id}`}
                    className="doctor-card-button"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorList;
