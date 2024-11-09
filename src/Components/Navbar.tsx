import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [closing, setClosing] = useState<boolean>(false);

  const toggleMenu = () => {
    if (menuOpen) {
      setClosing(true);
      setTimeout(() => {
        setMenuOpen(false);
        setClosing(false);
      }, 400);
    } else {
      setMenuOpen(true);
    }
  };

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | undefined;

    if (menuOpen && !closing) {
      timeout = setTimeout(() => {
        setMenuOpen(false);
      }, 8000);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [menuOpen, closing]);

  return (
    <div className={`navbar ${menuOpen ? "show" : ""}`}>
      <div className="navbar-wrapper" style={{ cursor: "default" }}>
        <a href="#home" className="navbar-left">
          <div className="navbar-image"></div>
          <h1>Binus Billiard Comfort</h1>
        </a>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className="hamburger-bar"></div>
          <div className="hamburger-bar"></div>
          <div className="hamburger-bar"></div>
        </div>

        <div className={`nav-menu ${menuOpen && !closing ? "show" : ""}`}>
          <a href="#home">Home</a>
          <a href="#product">Products</a>
          <a href="#information">Information</a>
          <a href="#counter">Counter</a>
          <a href="#order">Order Now</a>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
