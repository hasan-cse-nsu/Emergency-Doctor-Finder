/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import DoctorSearch from "../components/DoctorSearch";
import SpecialtySearch from "../components/SpecialtySearch";

const HomePage = () => {
  let [list, setList] = useState([]);

  useEffect(() => {
    (async () => {})();
  }, []);

  return (
    <>
      <Layout>
        <DoctorSearch />
        <SpecialtySearch />
      </Layout>
    </>
  );
};

export default HomePage;
