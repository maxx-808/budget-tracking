import React, { useState } from "react";
import "../App.css";
import LandNav from "../components/Navbar/LandNav/LandNav.js";
import Auth from "../components/Auth/Auth";

const Landing = () => {
  const page = useState({ page: "landing" });
  return (
    <div className="page">
      <Auth>
        <LandNav page={page} />
        <h1>Welcome to my Budget Tracker</h1>
      </Auth>
    </div>
  );
};

export default Landing;
