import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [count, setCount] = useState(0);

  return (
    <div className="navbar">
      <div className="navbar-wrapper"></div>
    </div>
  );
}
export default Navbar;
