import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import "../../Pages/Login";
import "../../Pages/Register";

function LandNav(props) {
  const currentPage = props.page[0].page;

  useEffect(() => {
    const login = document.getElementById("login");
    const register = document.getElementById("register");
    if (currentPage === "/login") {
      login.classList.add("hidden");
    } else if (currentPage === "/register") {
      register.classList.add("hidden");
    }
  });

  return (
    <nav>
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li id="login">
            <Link to="/login">Login</Link>
          </li>
          <li id="register">
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default LandNav;
