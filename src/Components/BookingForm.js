import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../Components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Stylesheet/BookingForm.css";

const slides = [
  {
    title: "Elevate your travel experience!",
    description:
      "indulge in a world of comfort, elegance, and top-notch service. From stunning suites to serene deluxe rooms.",
  },
  {
    title: "Reserve your room today!",
    description:
      "Experience unmatched comfort, breathtaking views, and top-tier hospitality.",
  },
  {
    title: "Smart Customer and Room-service Management",
    description:
      "Tired of the same routine? Escape to comfort, relaxation, and unforgettable memories.",
  },
];

const BookingForm = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    gender: "",
    email: "",
    city: "",
    country: "",
    zip: "",
    room: "",
    request: "",
    arrival: "",
    coupon: "",
  });
  const [loading, setLoading] = useState(false);

   useEffect(() => {
       const interval = setInterval(() => {
         setCurrentSlide((prev) => (prev + 1) % slides.length);
       }, 5000);
       return () => clearInterval(interval);
     }, []);
 
   const handleChange = (e) => {
     setFormData({ ...formData, [e.target.name]: e.target.value });
   };
 
   const handleSubmit = async (e) => {
     e.preventDefault();
     setLoading(true);
 
     console.log("Sending data:", formData); // Debugging the request
 
     try {
       const response = await fetch("http://127.0.0.1:8000/api/booking/", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(formData),
       });
 
       const data = await response.json();
 
       if (response.ok) {
        toast.success("Thank You for Booking with Us", {
                position: "top-right",
                autoClose: 2000,
              });
         setFormData({
           name: "",
           surname: "",
           phone: "",
           gender: "",
           email: "",
           city: "",
           country: "",
           zip: "",
           room: "",
           request: "",
           arrival: "",
           coupon: "",
         });
       } else {
        toast.error("Login failed: Invalid credentials" + (data.message || "Unknown error"));
       }
     } catch (error) {
       console.error("Error:", error);
       alert("Failed to submit booking");
     } finally {
       setLoading(false);
     }
   };

  return (
    <>
      <Navbar />
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="login-family">
        {/* Left Section - Animated Slideshow */}
        <div className="log-first">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="slide"
            >
              <h1>{slides[currentSlide].title}</h1>
              <p>{slides[currentSlide].description}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        {/* right Section - Booking form */}
        <div className="equity-form1">
          <h2 className="sect-tit">Booking Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="forrow">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required
              />
              <input
                type="text"
                name="surname"
                placeholder="Surname"
                value={formData.surname}
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
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
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
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="form-input"
              required
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              className="form-input"
              required
            />
            <input
              type="text"
              name="zip"
              placeholder="ZIP Code"
              value={formData.zip}
              onChange={handleChange}
              className="form-input"
              required
            />
            <select
              name="room"
              value={formData.room}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">Select Room Type</option>
              <option value="standard room">Standard Room</option>
              <option value="superior room">Superior Room</option>
              <option value="family room">Family Room</option>
              <option value="one-bedroom suite">One-Bedroom Suite</option>
              <option value="deluxe room">Deluxe Room</option>
              <option value="accessible room">Accessible Room</option>
            </select>
            <textarea
              name="request"
              placeholder="Special Requests"
              value={formData.request}
              onChange={handleChange}
              className="form-textarea"
            ></textarea>
            <input
              type="date"
              name="arrival"
              value={formData.arrival}
              onChange={handleChange}
              className="form-input"
              required
            />
            <input
              type="text"
              name="coupon"
              placeholder="Coupon Code"
              value={formData.coupon}
              onChange={handleChange}
              className="form-input"
            />
            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? "Submitting..." : "SUBMIT"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingForm;
