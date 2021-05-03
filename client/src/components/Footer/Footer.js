import React, { useState } from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <footer
        class="text-center text-white"
        styles="background-color: #f1f1f1;"
      >
        <div
          class="text-center text-dark p-3"
          styles="background-color: rgba(0, 0, 0, 0.2);"
        >
          © 2020 Copyright:
          <a class="text-dark" href="https://github.com/maxx-808">
            maxx-808
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;