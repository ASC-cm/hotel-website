import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchProfile, updateProfile } from "../services/api";
import "react-toastify/dist/ReactToastify.css";
import "../Stylesheet/Profile.css";
import Navbar from "./Navbar";
import Spinner from "./Spinner";
import { FaArrowLeft } from "react-icons/fa";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getProfile = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          setError("No token found. Please log in.");
          return;
        }

        const data = await fetchProfile();
        setProfile(data);
        setFormData(data);
      } catch (error) {
        setError("Failed to load profile. Try logging in again.");
        console.error("Error fetching profile:", error.message);
        setLoading(false);
      }
    };

    getProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    try {
      await updateProfile(formData);
      setProfile(formData);
      setIsEditing(false);
      setError("Profile updated successfully.");
    } catch (error) {
      setError("Failed to update profile.");
      console.error("Error updating profile:", error.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/api/login");
  };

  const goToBookingForm = () => {
    navigate("/BookingForm");
  };

  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <>
      <Navbar />
      <div className="profile">
        <div className="profile-header">
          <FaArrowLeft className="back-arrow" onClick={() => navigate("/")} />
          <h2 className="profile-title">Profile</h2>
          <button className="bundle" onClick={goToBookingForm}>
            Book Now
          </button>
        </div>

        {profile ? (
          <div>
            {isEditing ? (
              <div className="profile-form">
                <label>
                  First Name:
                  <input
                    type="text"
                    name="first_name"
                    value={formData.first_name || ""}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Last Name:
                  <input
                    type="text"
                    name="last_name"
                    value={formData.last_name || ""}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Email:
                  <input
                    type="email"
                    name="email"
                    value={formData.email || ""}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Gender:
                  <input
                    type="text"
                    name="gender"
                    value={formData.gender || ""}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Phone Number:
                  <input
                    type="number"
                    name="phone_number"
                    value={formData.phone_number || ""}
                    onChange={handleChange}
                  />
                </label>
                <button className="save" onClick={handleSave}>
                  Save
                </button>
                <button className="cancel" onClick={() => setIsEditing(false)}>
                  Cancel
                </button>
              </div>
            ) : (
              <div className="profile-details">
                <p>First Name: {profile.first_name}</p>
                <p>Last Name: {profile.last_name}</p>
                <p>Email: {profile.email}</p>
                <p>Gender: {profile.gender}</p>
                <p>Phone Number: {profile.phone_number}</p>
                <button onClick={() => setIsEditing(true)}>Edit Profile</button>
                <button className="logout" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Spinner loading={loading} />
        )}
      </div>

      <style>
        {`
          .profile-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
          }

          .profile-title {
            margin-left: 10px;
            font-size: 24px;
            font-weight: bold;
          }

          .bundle {
            background-color: rgb(15, 247, 50);
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            transition: background 0.3s ease;
          }
          .bundle:hover {
            background-color:green;
          }
        `}
      </style>
    </>
  );
};

export default Profile;
