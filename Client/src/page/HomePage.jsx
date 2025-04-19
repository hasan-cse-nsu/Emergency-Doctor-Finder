/* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from "react";
// import Layout from "../Layout/Layout";
// import DoctorSearch from "../components/DoctorSearch";
// import SpecialtySearch from "../components/SpecialtySearch";

// const HomePage = () => {

//   return (
//     <>
//       <Layout>
//         <DoctorSearch />
//         <SpecialtySearch />
//       </Layout>
//     </>
//   );
// };

// export default HomePage;

import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import DoctorSearch from "../components/DoctorSearch";
import SpecialtySearch from "../components/SpecialtySearch";

const HomePage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4 leading-tight">
          Find Trusted Doctors, Instantly
        </h1>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Search from a wide list of verified medical professionals near your
          location and book appointments in seconds.
        </p>
      </section>

      <DoctorSearch />

      <SpecialtySearch />

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50 px-6">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
          Why Emergency Doctor Finder?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          <div>
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-lg font-semibold text-blue-700">Fast Access</h3>
            <p className="text-gray-600 text-sm mt-2">
              Get connected to doctors immediately when you need them most.
            </p>
          </div>
          <div>
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-lg font-semibold text-blue-700">
              Verified Doctors
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              All our doctors are verified and approved for your safety.
            </p>
          </div>
          <div>
            <div className="text-5xl mb-4">📅</div>
            <h3 className="text-lg font-semibold text-blue-700">
              Easy Booking
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              Just a few clicks to book, reschedule, or cancel your
              appointments.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-10">
          Trusted by Thousands
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Patients across Bangladesh rely on Emergency Doctor Finder for instant
          access to qualified doctors.
        </p>
      </section>
    </Layout>
  );
};

export default HomePage;
