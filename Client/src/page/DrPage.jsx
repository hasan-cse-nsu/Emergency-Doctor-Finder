/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import DoctorList from "../components/DoctorList";
import { getAllDoctors } from "../apiRequest/api";

const DrPage = () => {
  let [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      let res = await getAllDoctors();
      setList(res);
    })();
  }, []);

  return (
    <>
      <Layout>
        <DoctorList list={list} />
      </Layout>
    </>
  );
};

export default DrPage;
