import React from "react";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="w-full h-[80px] bg-gray-200">
      <div className="container mx-auto">
        <div className="logo ">
          <img src={logo} alt="sobjibari" className="w-[100px]" />
        </div>
        <div className=""></div>
        <div className=""></div>
      </div>
    </nav>
  );
};

export default Navbar;
