/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const TeamSection = (props) => {
  return (
    <>
      <section className="bg-gray-50 py-16 px-4 md:px-8">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {props.list.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <img
                  src={item["image"]}
                  alt={item["name"]}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800">{item["name"]}</h3>
                <p className="text-gray-500 mb-4">{item["designation"]}</p>
                <p className="text-gray-700">{item["short"]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamSection;
