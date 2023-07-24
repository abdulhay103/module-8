import React from "react";
import MenuBar from "../header/MenuBar";
import Footer from "../footer/Footer";

const Layout = (props) => {
  return (
    <div>
      <MenuBar />
      <div className=" container mx-auto pt-24"> {props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
