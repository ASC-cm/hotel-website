import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import "../Stylesheet/BookingPage.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import deluxeImg from "../assets/ass.webp";
import familyImg from "../assets/family.webp";
import standardImg from "../assets/standard.webp";
import superiorImg from "../assets/superior1.webp";
import suiteImg from "../assets/room.webp";

import weekendImg from "../assets/stand3.webp";
import flyImg from "../assets/superior2.webp";
import longtermImg from "../assets/family.webp";
import monthImg from "../assets/bu.webp";
import sixmonthImg from "../assets/ass2.webp";

const Booking = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("accommodations");
  const [subSection, setSubSection] = useState("rooms");
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [selectedDeal, setSelectedDeal] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if the user is logged in
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token); // Convert token presence to boolean
  }, []);

  // Function to handle Sign In & Book button click
  const handleBookNow = () => {
    if (isAuthenticated) {
      navigate("/api/profile"); // Redirect to profile if signed in
    } else {
      navigate("/api/login"); // Redirect to login if not signed in
    }
  };

  const rooms = [
    { name: "Deluxe Room", price: 224, img: deluxeImg },
    { name: "Family Room", price: 249, img: familyImg },
    { name: "Standard Room", price: 199, img: standardImg },
    { name: "Superior Room", price: 275, img: superiorImg },
    { name: "One-Bedroom Suite", price: 299, img: suiteImg },
  ];

  const parkDeals = [
    { name: "Weekend Getaway", price: 399, nights: 2, img: weekendImg },
    { name: "Stay & Fly", price: 499, nights: 3, img: flyImg },
    { name: "Long-Term Parking", price: 699, nights: 7, img: longtermImg },
    { name: "1-Month Extended Stay", price: 1999, nights: 30, img: monthImg },
    { name: "6-Month Stay & Park", price: 9999, nights: 180, img: sixmonthImg },
  ];

  // Handle room selection
  const handleRoomSelection = (room) => {
    setSelectedRooms((prev) => {
      const alreadySelected = prev.find((r) => r.name === room.name);
      return alreadySelected
        ? prev.filter((r) => r.name !== room.name)
        : [...prev, room];
    });
  };

  // Handle Park & Stay selection
  const handleDealSelection = (deal) => {
    setSelectedDeal((prevDeal) => (prevDeal?.name === deal.name ? null : deal));
  };

  // Calculate total dynamically
  const totalAmount =
    selectedRooms.reduce((acc, room) => acc + room.price, 0) +
    (selectedDeal ? selectedDeal.price : 0);

  const renderMainContent = () => {
    switch (activeSection) {
      case "datesOfStay":
        return (
          <div className="date-picker-container">
            <label>Select Check-in and Check-out Dates:</label>
            <DatePicker
              selectsRange
              startDate={startDate}
              endDate={endDate}
              onChange={(update) => setDateRange(update)}
              minDate={new Date()}
              placeholderText="Select dates"
              withPortal
            />
            {startDate && endDate && (
              <p>
                Check-in: {startDate.toLocaleDateString()} | Check-out:{" "}
                {endDate.toLocaleDateString()}
              </p>
            )}
          </div>
        );
      case "accommodations":
        return (
          <>
            <nav className="nav-tabs">
              <button
                className={subSection === "rooms" ? "active" : ""}
                onClick={() => setSubSection("rooms")}
              >
                🏨 ROOMS
              </button>
              <button
                className={subSection === "parkStay" ? "active" : ""}
                onClick={() => setSubSection("parkStay")}
              >
                🎁 PARK & STAY
              </button>
            </nav>

            {subSection === "rooms" ? (
              <section className="room-list">
                {rooms.map((room, index) => (
                  <div
                    key={index}
                    className={`room-card ${
                      selectedRooms.some((r) => r.name === room.name)
                        ? "selected"
                        : ""
                    }`}
                    onClick={() => handleRoomSelection(room)}
                  >
                    <img src={room.img} alt={room.name} />
                    <h3>{room.name}</h3>
                    <p>Price: ${room.price} per night</p>
                  </div>
                ))}
              </section>
            ) : (
              <section className="park-stay">
                <h2>Park & Stay Deals</h2>
                <div className="room-list">
                  {parkDeals.map((deal, index) => (
                    <div
                      key={index}
                      className={`deal-card ${
                        selectedDeal?.name === deal.name ? "selected" : ""
                      }`}
                      onClick={() => handleDealSelection(deal)}
                    >
                      <img src={deal.img} alt={deal.name} />
                      <h3>{deal.name}</h3>
                      <p>
                        ${deal.price} for {deal.nights} nights
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <div className="hotel-booking">
        <header className="header">
          <div className="logo">Book Your Room</div>
          <div className="header-info">
            <button onClick={() => setActiveSection("datesOfStay")}>
              DATES OF STAY
            </button>
            <button onClick={() => setActiveSection("accommodations")}>
              ACCOMMODATIONS
            </button>
            <button onClick={() => setActiveSection("total")}>
              TOTAL: ${totalAmount}
            </button>
          </div>
        </header>

        <main>{renderMainContent()}</main>

        <div className="booking-footer">
          <button className="book-now" onClick={handleBookNow}>
            {isAuthenticated ? "PROCEED TO PROFILE" : "SIGN IN AND BOOK"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Booking;
