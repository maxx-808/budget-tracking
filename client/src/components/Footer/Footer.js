import React, { useState } from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <footer
        className="text-center text-white"
        styles="background-color: #f1f1f1;"
      >
        <div
          className="text-center text-white p-3"
          styles="background-color: rgba(0, 0, 0, 0.2);"
        >
          © 2020 Copyright:{" "}
          <a className="text-white" href="https://github.com/maxx-808">
            maxx-808
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
