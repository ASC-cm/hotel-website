import React, { useState } from "react";
import { FaBars, FaSearch, FaPhoneAlt, FaTimes } from "react-icons/fa";
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
          <li>Hotels</li>
          <li>Explore</li>
          <li>Offers</li>
          <li>Dining</li>
          <li>Functions</li>
          <li>Our Story</li>
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



// import React, { useState } from "react";
// import { FaBars, FaSearch, FaPhoneAlt, FaTimes } from "react-icons/fa";
// import "./Navbar.css";

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <>
//       {/* Navbar */}
//       <nav className="navbar">
//         <div className="navbar-left">
//           <FaBars className="navbar-icon" onClick={toggleMenu} />
//           <h1 className="navbar-logo">SCENIC HOTEL GROUP</h1>
//         </div>
//         <div className="navbar-right">
//           <FaPhoneAlt className="navbar-icon" />
//           <FaSearch className="navbar-icon" />
//         </div>
//       </nav>

//       {/* Sidebar Menu */}
//       <div className={`sidebar ${isMenuOpen ? "open" : ""}`}>
//         <div className="sidebar-header">
//           <FaTimes className="close-icon" onClick={toggleMenu} />
//         </div>
//         <ul className="sidebar-menu">
//           <li>Hotels</li>
//           <li>Explore</li>
//           <li>Offers</li>
//           <li>Dining</li>
//           <li>Functions</li>
//           <li>Our Story</li>
//         </ul>
//         <div className="sidebar-footer">
//           <p>Need help with reservations?</p>
//           <p>
//             P: <a href="tel:0800696963">0800 69 69 63</a>
//           </p>
//           <p>
//             P: <a href="tel:+6433571919">+64 3 357 1919</a>
//           </p>
//         </div>
//       </div>

//       {/* Banner Section */}
//       <div className="banner">
//         <div className="banner-text">
//           <h2>Win this Summer</h2>
//           <p>
//             Share your summer snaps for your chance to win, <a href="#details">find out more</a>.
//           </p>
//         </div>

//         {/* Search Section */}
//         <div className="search-bar">
//           <div className="search-option">
//             <label htmlFor="hotel">Hotel</label>
//             <select id="hotel">
//               <option>Where to?</option>
//               <option>Auckland</option>
//               <option>Wellington</option>
//               <option>Christchurch</option>
//             </select>
//           </div>
//           <div className="search-option">
//             <label htmlFor="dates">Check-in & Check-out</label>
//             <input type="date" id="dates" />
//           </div>
//           <div className="search-option">
//             <label htmlFor="rooms">Rooms & Guests</label>
//             <input type="text" id="rooms" placeholder="Rooms 1, Adults 2" />
//           </div>
//           <div className="search-option">
//             <label htmlFor="promo">Promo Code</label>
//             <input type="text" id="promo" placeholder="Enter code" />
//           </div>
//           <button className="search-button">Check Availability</button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Navbar;

