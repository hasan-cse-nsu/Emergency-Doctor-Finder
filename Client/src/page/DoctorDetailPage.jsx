/* eslint-disable no-unused-vars */
import React from "react";
import Layout from "../Layout/Layout";
import DoctorDetail from "./DoctorDetail";
import { useParams } from "react-router-dom";

const DoctorDetailPage = () => {
  const { id } = useParams();

  return (
    <>
      <Layout>
        <DoctorDetail id={id} />
      </Layout>
    </>
  );
};

export default DoctorDetailPage;
