import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./Spinner";
import Navbar from "./Navbar";
import "../Stylesheet/SignUp.css";

const slides = [
  {
    title: "Onboarding & Customers Portal",
    description: "Well designed onboarding, e-signature, off-boarding workflows",
  },
  {
    title: "Time, Performance & Presence Management",
    description: "World class timesheet and performance management system",
  },
  {
    title: "Smart Customer and Room-service Management",
    description: "Seamless Customer processes with automation and AI insights.",
  },
];

const SignUp = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    phone_number: "",
    password: "",
    confirm_password: "",
  });
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !formData.first_name ||
      !formData.last_name ||
      !formData.email ||
      !formData.gender ||
      !formData.phone_number ||
      !formData.password ||
      !formData.confirm_password
    ) {
      toast.error("All fields are required.", { position: "top-right" });
      return;
    }

    if (formData.password !== formData.confirm_password) {
      toast.error("Passwords do not match.", { position: "top-right" });
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/signup/",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Signup Response:", response.data); // ✅ Use response to avoid ESLint warning

      toast.success(response.data.message || "Signup successful! Redirecting...", {
        position: "top-right",
        autoClose: 2000,
      });

      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        gender: "",
        phone_number: "",
        password: "",
        confirm_password: "",
      });

      setTimeout(() => {
        window.location.href = "/api/login";
      }, 2000);
    } catch (error) {
      toast.error(
        error.response?.data?.detail || "An error occurred during signup.",
        { position: "top-right" }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="signup-parent">
        <div className="falling-text1">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <h1>{slides[currentSlide].title}</h1>
              <p>{slides[currentSlide].description}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="upnepa">
          <div className="naija-wrapper">
            <h2>Customers Signup</h2>
            <p>Create a Dashboard account</p>

            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="input-group1">
                <input
                  type="text"
                  name="first_name"
                  placeholder="First name"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last name"
                  value={formData.last_name}
                  onChange={handleChange}
                  required
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <div>
                <label>Gender:</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <input
                type="tel"
                name="phone_number"
                placeholder="Phone Number"
                value={formData.phone_number}
                onChange={handleChange}
                required
              />

              <div className="password-container1">
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <span
                  className="eye-icon"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              <div className="password-container1">
                <input
                  type={confirmPasswordVisible ? "text" : "password"}
                  name="confirm_password"
                  placeholder="Confirm Password"
                  value={formData.confirm_password}
                  onChange={handleChange}
                  required
                />
                <span
                  className="eye-icon"
                  onClick={() =>
                    setConfirmPasswordVisible(!confirmPasswordVisible)
                  }
                >
                  {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              <div className="checkbox-group1">
                <input type="checkbox" required />
                <span>
                  I accept the Heaven Hotel <Link to="/">Terms of Service</Link>
                </span>
              </div>

              <button type="submit" disabled={loading} className="bot">
                {loading ? (
                  <>
                    Signing up... <Spinner />
                  </>
                ) : (
                  "Sign Up"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
