import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoutingElem from "./routers/RoutingElem";

const App = () => {
  return (
    <div className=" bg-gradient-to-br from-indigo-200 via-purple-100 to-pink-200 min-h-screen">
      <BrowserRouter>
        <RoutingElem />
      </BrowserRouter>
    </div>
  );
};

export default App;
