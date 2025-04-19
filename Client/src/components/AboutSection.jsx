/* eslint-disable no-unused-vars */
import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-blue-700 mb-4">
          About Emergency Doctor Finder
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Emergency Doctor Finder is a modern, real-time solution designed to
          connect patients with available medical professionals quickly during
          urgent situations. Our mission is to minimize delays and help save
          lives by streamlining the process of finding the right doctor —
          anytime, anywhere.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-blue-50 p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              Instant Access
            </h3>
            <p className="text-gray-600 text-sm">
              Get connected with nearby doctors in real-time with just a few
              clicks, no matter your location.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              Verified Professionals
            </h3>
            <p className="text-gray-600 text-sm">
              We ensure every doctor is verified and approved by our admin panel
              for reliable service.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              Simplified Appointments
            </h3>
            <p className="text-gray-600 text-sm">
              Easily book, manage, or cancel appointments as needed — all from
              your dashboard.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
