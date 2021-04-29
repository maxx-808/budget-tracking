import React, { useState, useContext, useEffect } from "react";
import UserContext from "../Context/UserContext";
import { useHistory } from "react-router-dom";
import "../App.css";
import LandNav from "../components/Navbar/LandNav";

const Landing = () => {
  const page = useState({ page: "landing" });
  return (
    <div>
      <LandNav page={page} />
      <h1>Hello landing</h1>
    </div>
  );
};

export default Landing;
