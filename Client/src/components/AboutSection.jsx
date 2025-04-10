/* eslint-disable no-unused-vars */
import React from "react";

const AboutSection = () => {
  return (
    <>
      <section className="bg-gray-100 py-12 px-4 md:px-8">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">
            About Us
          </h2>
          <div className="md:flex md:justify-between md:items-center">
            <div className="md:w-3/3 md:pl-8">
              <p className="text-lg text-gray-700 mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here, content here.
              </p>
              <p className="text-lg text-gray-700">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
