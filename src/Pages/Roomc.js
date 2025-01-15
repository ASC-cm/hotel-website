import React, { useState, useEffect } from "react";
import "../Stylesheet/Roomc.css";

const rooms = [
  {
    name: "Family Room",
    image: require("../assets/family.webp"),
    size: "40m²",
    occupancy: "3",
  },
  {
    name: "Superior Room",
    image: require("../assets/superior room.webp"),
    size: "40m²",
    occupancy: "2",
  },
  {
    name: "Deluxe Room",
    image: require("../assets/superior plus.webp"),
    size: "35m²",
    occupancy: "1-2",
  },
  {
    name: "Accessible Room",
    image: require("../assets/family1.webp"),
    size: "40m²",
    occupancy: "1-2",
  },
  {
    name: "Standard Room",
    image: require("../assets/standard room.webp"),
    size: "30m²",
    occupancy: "1",
  },
  
];

const Roomc = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % rooms.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? rooms.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % rooms.length);
  };

  return (
    <div className="carousel-container">
      <h2>Other room options</h2>
      <div
        className="carousel"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "transform 1s ease-in-out", // Smooth sliding transition
        }}
      >
        {rooms.map((room, index) => (
          <div key={index} className="carousel-item">
            <div className="image-wrapper">
              <img src={room.image} alt={room.name} />
              <div className="overlay">
                <h3>{room.name}</h3>
                <div className="room-info">
                  <span>{room.size}</span>
                  <span>Sleeps {room.occupancy}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="prev" onClick={handlePrev}>
        &#8592;
      </button>
      <button className="next" onClick={handleNext}>
        &#8594;
      </button>
    </div>
  );
};

export default Roomc;
