// import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <a href="#home">
        <div className="navbar-wrapper" style={{ cursor: "pointer" }}>
          <div className="navbar-image"></div>
          <h1>Binus Billiard Comfort</h1>
        </div>
      </a>
    </div>
  );
}
export default Navbar;
