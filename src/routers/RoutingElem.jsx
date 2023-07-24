import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Income from "../pages/Income";
import Expanse from "../pages/Expanse";

const RoutingElem = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/income" element={<Income />} />
      <Route exact path="/expanse" element={<Expanse />} />
    </Routes>
  );
};

export default RoutingElem;
