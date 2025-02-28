import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "./Footer";
import background from "../assets/function.webp";
import SearchBar from "../Components/Searchbar";
import Map from "../Components/Map";
import "../Stylesheet/Function.css";

function Function() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    company: "",
    email: "",
    event_date: "",
    guest_count: "",
    event_type: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    console.log("Sending data:", formData); // Debugging the request

    try {
      const response = await fetch("http://127.0.0.1:8000/api/event-enquiry/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Enquiry submitted successfully!");
        setFormData({
          first_name: "",
          last_name: "",
          phone: "",
          company: "",
          email: "",
          event_date: "",
          guest_count: "",
          event_type: "",
        });
      } else {
        alert("Error submitting enquiry: " + (data.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit enquiry");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="hero-overlay1" />
      </div>
      <SearchBar />
      <section className="location-section1">
        <h2>Heaven Conference Room & Event Facilities</h2>
        <img
          src={require("../assets/line2.png")}
          alt="design"
          width={50}
          height={50}
        />
        <p>
          Heavens Hotel Group Airport is located in the Airpark Business
          Centre...
        </p>
      </section>
      <div className="function-room-container">
        <h2>Function Room</h2>
        <div className="function-room-section">
          <img
            src={require("../assets/function pic 2.webp")}
            alt="Function Room"
            className="function-room-image"
            width={200}
            height={150}
          />
          <div className="function-room-details">
            <h1 className="room-title">Catalina Room</h1>
            <p className="room-description">
              For Conferencing or Meetings, we offer a versatile function
              room...
            </p>
          </div>
        </div>

        {/* Enquiry Form */}
        <div className="enquiry-form-section">
          <h2 className="section-title">Make a Quick Enquiry</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="form-input"
                required
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-input"
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
              className="form-input"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
            <input
              type="date"
              name="event_date"
              value={formData.eventDate}
              onChange={handleChange}
              className="form-input"
              required
            />
            <input
              type="number"
              name="guest_count"
              placeholder="Number of Guests"
              value={formData.guestCount}
              onChange={handleChange}
              className="form-input"
              required
            />
            <select
              name="event_type"
              value={formData.eventType}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">Select Event Type</option>
              <option value="conference">Conference</option>
              <option value="meeting">Meeting</option>
              <option value="seminar">Seminar</option>
              <option value="training">Training</option>
              <option value="exhibition">Exhibition</option>
              <option value="function">Function</option>
              <option value="banquet">Banquet</option>
              <option value="wedding">Wedding</option>
              <option value="others">Others</option>
            </select>
            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? "Submitting..." : "SUBMIT"}
            </button>
          </form>
        </div>
      </div>
      <Map />
      <Footer />
    </div>
  );
}

export default Function;
