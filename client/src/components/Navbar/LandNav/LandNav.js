import React, { useState, useEffect } from "react";
import "../Nav.css";

const LandNav = (props) => {
  const currentPage = window.location.pathname;
  const [userData, setUserData] = useState({
    user: undefined,
    token: undefined,
  });

  useEffect(() => {
    const login = document.getElementById("login");
    const register = document.getElementById("register");
    if (currentPage === "/login") {
      login.classList.add("hidden");
    } else if (currentPage === "/register") {
      register.classList.add("hidden");
    }

    if (props.page === "/about") {
      const t = document.querySelector("a[href='/about'");
      t.classList.add("selected");
    }
    if (props.page === "/contact") {
      const t = document.querySelector("a[href='/contact'");
      t.classList.add("selected");
    }
    if (props.page === "/register") {
      const t = document.querySelector("a[href='/login'");
      t.classList.add("selected");
    }
    if (props.page === "/login") {
      const t = document.querySelector("a[href='/register'");
      t.classList.add("selected");
    }
  });

  return (
    <div className="navbars">
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="/">
          Budget Tracker :D
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Links
              </span>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a
                  className="dropdown-item"
                  href="https://www.github.com/maxx-808/budget-tracking"
                  target="blank"
                >
                  Github Repo
                </a>
                <a
                  className="dropdown-item"
                  href="https://www.github.com/maxx-808"
                  target="blank"
                >
                  Github Profile
                </a>
                <a
                  className="dropdown-item"
                  href="https://www.linkedin.com/in/max-higa-2460351b4/"
                  target="blank"
                >
                  LinkedIn
                </a>
                {/* <div className="dropdown-divider"></div> */}
                <a
                  className="dropdown-item"
                  href="https://maxx-808.github.io/portfolio-react/"
                  target="blank"
                >
                  Portfolio
                </a>
                <a
                  className="dropdown-item"
                  href="https://docs.google.com/document/d/1Miox-krIs-7t6rZeaTUT29gVSKrHD0Sf0FtkZESXulU/edit?usp=sharing"
                  target="blank"
                >
                  Resume
                </a>
              </div>
            </li>
          </ul>
          <div className="form-inline my-2 my-lg-0">
            <ul className="navbar-nav mr-auto">
              <li id="login" className="nav-item active">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>

              <li id="register" className="nav-item active">
                <a className="nav-link" href="/register">
                  Dont have an account? Register Now!
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default LandNav;
