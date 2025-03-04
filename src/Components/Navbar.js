import React, { useState, useEffect } from "react";
import { FaBars, FaSearch, FaPhoneAlt, FaTimes, FaUser, FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "../Stylesheet/Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const navigate = useNavigate(); // Replace useHistory with useNavigate

   useEffect(() => {
     const authToken = localStorage.getItem("authToken"); // Changed to match snippet 1's token name
     if (authToken) {
       setIsLoggedIn(true);
     } else {
       setIsLoggedIn(false);
     }
   }, []);

   const handleIconClick = () => {
     if (isLoggedIn) {
       navigate("/api/profile"); // Changed to match snippet 1's navigation path
     } else {
       navigate("/api/login");
     }
   };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <FaBars className="navbar-icon" onClick={toggleMenu} />
          <div className="navbar-brand">
            <h1 className="navbar-logo">HEAVEN HOTEL GROUP</h1>
            <p className="navbar-subtitle">God Almighty Owned & Operated</p>
          </div>
        </div>
        <div className="navbar-right">
          <div onClick={handleIconClick} className="navbar-icon">
            {isLoggedIn ? <FaUserCircle size={32} /> : <FaUser size={32} />}
          </div>
          <Link to="tel:+2347034418309" className="navbar-icon">
            <FaPhoneAlt />
          </Link>
          <Link to="/Story" className="navbar-icon">
            <FaSearch />
          </Link>
        </div>
      </nav>

      {/* Sidebar Menu */}
      <div className={`sidebar ${isMenuOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <div className="navbar-brand1">
            <h1 className="navbar-logo">HEAVEN HOTEL GROUP</h1>
            <p className="navbar-subtitle">God Almighty Owned & Operated</p>
          </div>
          <FaTimes className="close-icon" onClick={toggleMenu} />
        </div>
        <ul className="sidebar-menu">
          <li>
            <Link to="/" onClick={toggleMenu}>
              Hotels
            </Link>
          </li>
          <li>
            <Link to="/Room" onClick={toggleMenu}>
              Rooms
            </Link>
          </li>
          <li>
            <Link to="/Offer" onClick={toggleMenu}>
              Offers
            </Link>
          </li>
          <li>
            <Link to="/Dinning" onClick={toggleMenu}>
              Dining
            </Link>
          </li>
          <li>
            <Link to="/Function" onClick={toggleMenu}>
              Functions
            </Link>
          </li>
          <li>
            <Link to="/Story" onClick={toggleMenu}>
              Our Story
            </Link>
          </li>
        </ul>
        <div className="sidebar-footer">
          <p>Need help with reservations?</p>
          <p>
            P: <a href="+2347034418309">0800 69 69 63</a>
          </p>
          <p>
            P: <a href="+2348185313846">+64 3 357 1919</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Navbar;
