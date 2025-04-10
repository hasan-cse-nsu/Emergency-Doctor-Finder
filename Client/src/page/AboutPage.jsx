/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import AboutSection from "../components/AboutSection";
import TeamSection from "../components/TeamSection";
import { getTeamMember } from "../apiRequest/api";

const AboutPage = () => {
  let [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      let res = await getTeamMember();
      setList(res);
    })();
  }, []);

  return (
    <>
      <Layout>
        <AboutSection />
        <TeamSection list={list} />
      </Layout>
    </>
  );
};

export default AboutPage;
