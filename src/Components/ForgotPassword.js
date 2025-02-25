import React, { useState } from "react";
import axios from "axios";
import "../Stylesheet/ForgotPassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/forgot-password/", { email })
      .then((response) => {
        alert(response.data.message);
        window.location.href = "/api/reset-password";
      })
      .catch((error) => {
        console.error(error);
        alert("Error sending OTP");
      });
  };

  return (
    <form className="forgot-passwordist" onSubmit={handleSubmit}>
      <h2>Forgot Password</h2>
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button className="send-otp" type="submit">
        Send OTP
      </button>
    </form>
  );
}

export default ForgotPassword;
