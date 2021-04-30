import React, { useState, useContext, useEffect } from "react";
import UserContext from "../Context/UserContext";
import { useHistory } from "react-router-dom";
import "../App.css";
import LandNav from "../components/Navbar/LandNav";
import Auth from "../components/Auth/Auth";

const Landing = () => {
  const page = useState({ page: "landing" });
  return (
    <div>
      <Auth>
        <LandNav page={page} />
        <h1>Hello landing</h1>
      </Auth>
    </div>
  );
};

export default Landing;
