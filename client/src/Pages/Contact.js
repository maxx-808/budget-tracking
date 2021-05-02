import React, { useState, useContext, useEffect } from "react";
import UserContext from "../Context/UserContext";
import { useHistory } from "react-router-dom";
import LandNav from "../components/Navbar/LandNav/LandNav";
import "../App.css";

const Contact = () => {
  const page = useState({ page: "contact" });

  return (
    <div>
      <LandNav page={page} />
    </div>
  );
};

export default Contact;
