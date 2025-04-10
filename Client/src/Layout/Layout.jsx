/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import MenuBar from "../components/MenuBar";
import FooterBar from "../components/FooterBar";

const Layout = (props) => {
  return (
    <div>
      <MenuBar />
      {props.children}
      <FooterBar />
    </div>
  );
};

export default Layout;
