import React, { useState } from "react";
import "../Stylesheet/ProfileUpdate.css";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "./Navbar";
import "react-toastify/dist/ReactToastify.css";

function ProfileUpdate() {
  const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    gender: "",
    phone_number: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false); // Spinner state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Show spinner
    setError("");
    setSuccess("");

    const token = localStorage.getItem("authToken");

    if (!token) {
      setError("No token found. Please log in.");
      toast.error("No token found. Please log in.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:8000/api/profile-update/",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.detail || "An error occurred.");
        toast.error(errorData.detail || "An error occurred.");
      } else {
        setSuccess("Profile updated successfully.");
        toast.success("Profile updated successfully.");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      setError("An error occurred while updating the profile.");
      toast.error("An error occurred while updating the profile.");
    }

    setLoading(false); // Hide spinner
  };

  return (
    <>
      <Navbar />
      <div className="profile-update">
        <form className="profile-update-form" onSubmit={handleSubmit}>
          <h2>Profile Update</h2>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            value={formData.first_name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={formData.last_name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="gender"
            placeholder="Gender"
            value={formData.gender}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone_number"
            placeholder="Phone Number"
            value={formData.phone_number}
            onChange={handleChange}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? <span className="spinner"></span> : "Update Profile"}
          </button>
          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}
        </form>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </>
  );
}

export default ProfileUpdate;
