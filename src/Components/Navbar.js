import React, { useState } from "react";
import { FaBars, FaSearch, FaPhoneAlt, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../Stylesheet/Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <FaBars className="navbar-icon" onClick={toggleMenu} />
          <div className="navbar-brand">
            <h1 className="navbar-logo">SCENIC HOTEL GROUP</h1>
            <p className="navbar-subtitle">New Zealand Owned & Operated</p>
          </div>
        </div>
        <div className="navbar-right">
          <FaPhoneAlt className="navbar-icon" />
          <FaSearch className="navbar-icon" />
        </div>
      </nav>

      {/* Sidebar Menu */}
      <div className={`sidebar ${isMenuOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <FaTimes className="close-icon" onClick={toggleMenu} />
        </div>
        <ul className="sidebar-menu">
          <li>
            <Link to="/" onClick={toggleMenu}>Hotels</Link>
          </li>
          <li>
            <Link to="/explore" onClick={toggleMenu}>Explore</Link>
          </li>
          <li>
            <Link to="/Offer" onClick={toggleMenu}>Offers</Link>
          </li>
          <li>
            <Link to="/dining" onClick={toggleMenu}>Dining</Link>
          </li>
          <li>
            <Link to="/Function" onClick={toggleMenu}>Functions</Link>
          </li>
          <li>
            <Link to="/our-story" onClick={toggleMenu}>Our Story</Link>
          </li>
        </ul>
        <div className="sidebar-footer">
          <p>Need help with reservations?</p>
          <p>
            P: <a href="tel:0800696963">0800 69 69 63</a>
          </p>
          <p>
            P: <a href="tel:+6433571919">+64 3 357 1919</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Navbar;
