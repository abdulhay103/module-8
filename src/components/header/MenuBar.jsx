import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/TrackerLogo.png";

const MenuBar = () => {
  return (
    <header className="bg-white fixed w-full z-50 shadow py-2">
      <nav className="flex items-center justify-between container mx-auto">
        <div className=" w-32">
          <Link to={"/"}>
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <ul className="flex gap-6">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/income"}>Income</NavLink>
          </li>
          <li>
            <NavLink to={"/expanse"}>Expanse</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MenuBar;
