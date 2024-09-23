import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="Navbar">
        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <Link to="/cart">cart</Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
