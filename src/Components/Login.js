import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./Spinner";
import Navbar from "./Navbar";
import googleIcon from "../assets/google.png";
import "../Stylesheet/Login.css";

const slides = [
  {
    title: "Onboarding & Customers Portal",
    description:
      "Well-designed onboarding, e-signature, and offboarding workflows.",
  },
  {
    title: "Time, Performance & Presence Management",
    description: "A world-class timesheet and performance management Hotel.",
  },
  {
    title: "Smart Customer and Room-service Management",
    description: "Seamless Customer processes with automation and AI insights.",
  },
];

const Login = ({ setAuth }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

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

    try {
      const response = await axios.post(
        "http://localhost:8000/api/login/",
        formData
      );

      localStorage.setItem("authToken", response.data.access);
      setAuth(true);
      toast.success("Login successful! Redirecting...", {
        position: "top-right",
        autoClose: 2000,
      });

       navigate("/api/profile");
    } catch (error) {
      toast.error("Login failed: Invalid credentials", {
        position: "top-right",
      });
      setError("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="login-container1">
        {/* Left Section - Animated Slideshow */}
        <div className="login-info1">
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

        {/* Right Section - Login Form */}
        <motion.div
          className="login-form-container"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          <div className="form-wrapper1">
            <h2>Log In</h2>
            <p>Welcome back to Heaven Hotel</p>

            <form onSubmit={handleSubmit}>
              <label>Email*</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label>Password*</label>
              <div className="password-container1">
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
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

              <div className="forgot-password1">
                <Link to="/api/forgot-password">Forgot Password?</Link>
                {error && <p style={{ color: "red" }}>{error}</p>}
              </div>

              <motion.button
                type="submit"
                className="login-btn"
                whileHover={{ scale: 1.08, backgroundColor: "#5a0ecb" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                disabled={loading}
              >
                {loading ? (
                  <>
                    Logging in... <Spinner />
                  </>
                ) : (
                  "Login"
                )}
              </motion.button>

              <div className="or-divider">OR</div>

              <motion.button
                className="google-login"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={googleIcon}
                  alt="Google Logo"
                  className="google-icon"
                />
                Login with Google
              </motion.button>

              <p className="signup-link1">
                Don’t have an account? <Link to="/api/signup">Sign up</Link>
              </p>
            </form>
          </div>
        </motion.div>
      </div>
      <style>
        {`
          .password-container1 {
            position: relative;
            width: 100%;
          }
          .eye-icon {
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
            font-size: 20px;
            color: #888;
          }
          .spinner {
            display: inline-block;
            width: 20px;
            height: 20px;
            border: 3px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            border-top-color: #fff;
            animation: spin 0.8s linear infinite;
            margin-left: 10px;
          }
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </>
  );
};

export default Login;
