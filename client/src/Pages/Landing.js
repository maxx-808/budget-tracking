import React, { useState } from "react";
import "../App.css";
import Auth from "../components/Auth/Auth";

const Landing = () => {
  const page = useState({ page: "landing" });
  return (
    <div className="page">
      <Auth>
        <h1>Welcome to my Budget Tracker</h1>
      </Auth>
    </div>
  );
};

export default Landing;
