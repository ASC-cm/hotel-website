import React, { useState } from "react";
import background from '../assets/offer1.webp';
import Navbar from "../Components/Navbar";
import SearchBar from '../Components/Searchbar';
import "../Stylesheet/Offer.css"; 

const Offer = () => {
    const [selectedOption, setSelectedOption] = useState(""); // Track selected option
  const [isOpen, setIsOpen] = useState(false); // Track whether dropdown is open

  const nigeriaStates = [
    "Lagos",
    "Abuja",
    "Akwa Ibom",
    "Kaduna",
    "Rivers",
    "Kano",
    "Enugu",
    "Ogun",
    "Ekiti",
    "Anambra",
    "Delta",
  ];

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close the dropdown after selection
  };

  const handleInputClick = () => {
    setIsOpen(!isOpen); // Toggle dropdown visibility
  };

  const offers = [
    {
      title: "A Hawke’s Bay Showcase",
      location: "Scenic Hotel Te Pania",
      image: require("../assets/beach.jpeg"), // Replace with actual image path
      link: "#",
    },
    {
      title: "Summer Autumn Escape",
      location: "Scenic Matavai Apartments Niue",
      image: require("../assets/gym.jpeg"), // Replace with actual image path
      link: "#",
      badge: "Stay 7 Only Pay 6",
    },
    {
      title: "Stay 7 Pay 6",
      location: "Scenic Matavai Resort Niue",
      image: require("../assets/room1.jpeg"), // Replace with actual image path
      link: "#",
      badge: "Stay 7 Only Pay 6",
    },
    {
        title: "Stay 7 Pay 6",
        location: "Scenic Matavai Resort Niue",
        image: require("../assets/drinks.jpeg"), // Replace with actual image path
        link: "#",
        badge: "Buy 7 Only Pay 6",
    },
    {
        title: "Stay 7 Pay 6",
        location: "Scenic Matavai Resort Niue",
        image: require("../assets/food1.jpeg"), // Replace with actual image path
        link: "#",
        badge: "Order 7 Only Pay 6",
    },
    {
        title: "Stay 7 Pay 6",
        location: "Scenic Matavai Resort Niue",
        image: require("../assets/kitchen.jpeg"), // Replace with actual image path
        link: "#",
        badge: "60% Discount for New-comer",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="hero-section" style={{ backgroundImage: `url(${background})` }}>
        <div className="hero-overlay" />
    </div>
      <SearchBar />
      <section className='location-section1'>
        <h2>Auckland Airport Hotel Deals</h2>
        <img 
        src={require("../assets/line2.png")}
        alt="desihn"
        width={50}
        height={50}
        />
        <p>Located minutes from Auckland Airport, Heartland Hotel has some great hotel deals.</p>
      </section>
      <div className="offer-section">
       <div className="where-to-container">
          <label htmlFor="where-to" className="where-to-label">FILTER BY:</label>
          <div className="where-to-input" onClick={handleInputClick}>
            <input
              type="text"
              id="where-to"
              value={selectedOption}
              placeholder="Where To?"
              readOnly
            />
            <div className="dropdown-icon">&#9662;</div> {/* Simple dropdown icon */}
          </div>

          {isOpen && (
            <div className="dropdown">
              <div onClick={() => handleSelect("Other Countries")}>Other Countries</div>
              <div onClick={() => handleSelect("Nigeria")}>Nigeria</div>
              {selectedOption === "Nigeria" && (
                <div className="nigeria-states">
                  {nigeriaStates.map((state, index) => (
                    <div key={index} onClick={() => handleSelect(state)}>{state}</div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
        <div className="offer-grid">
          {offers.map((offer, index) => (
            <div key={index} className="offer-card">
              {/* Badge */}
              {offer.badge && (
                <div className="offer-badge">
                  {offer.badge}
                </div>
              )}
              {/* Image */}
              <img
                src={offer.image}
                alt={offer.title}
                className="offer-image"
              />
              {/* Content */}
              <div className="offer-content">
                <h3 className="offer-title">{offer.title}</h3>
                <p className="offer-location">{offer.location}</p>
                <a
                  href={offer.link}
                  className="offer-link"
                >
                  View Offer
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offer;
