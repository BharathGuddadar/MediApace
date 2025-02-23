import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Nav.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">MediDeliver</div>
        <div className={`navigate ${isMenuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/history">History</Link>
            </li>
            <li>
              <Link to="/track">Track Delivery</Link>
            </li>
            <li>
              <Link to="/stores">Stores</Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
          </ul>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;