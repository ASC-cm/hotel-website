import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import axios from "axios";
import Navbar from "./Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Stylesheet/ResetPassword.css";

function ResetPassword() {
  const [formData, setFormData] = useState({
    email: "",
    otp: "",
    new_password: "",
  });

  const navigate = useNavigate(); // ✅ Initialize navigate function

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/reset-password/",
        formData
      );

      console.log("Reset Password Response:", response.data);

      toast.success(response.data.message || "Password reset successful.");

      // ✅ Redirect to login page after 3 seconds
      setTimeout(() => {
        navigate("/api/login");
      }, 3000);
    } catch (error) {
      const errorMessage =
        error.response?.data?.non_field_errors?.[0] || "An error occurred.";
      toast.error(errorMessage);
    }
  };

  return (
    <>
      <Navbar />
      <div className="reset-password">
        <form className="reset-password-form" onSubmit={handleSubmit}>
          <h2>Reset Password</h2>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="otp"
            placeholder="OTP"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="new_password"
            placeholder="New Password"
            onChange={handleChange}
            required
          />
          <button type="submit">Reset Password</button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}

export default ResetPassword;
