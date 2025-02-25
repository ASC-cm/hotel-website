import React, { useEffect, useState } from "react";
import { fetchProfile, updateProfile } from "../services/api"; 
import "react-toastify/dist/ReactToastify.css";
import "../Stylesheet/Profile.css";
import Spinner from "./Spinner";


const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          setError("No token found. Please log in.");
          return;
        }

        console.log("Attempting to fetch profile with token:", token);

        const data = await fetchProfile();
        setProfile(data);
        setFormData(data);
      } catch (error) {
        setError("Failed to load profile. try again login");
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

  if (error) return <p style={{ color: "red" }}>{error}</p>;

 return (
   <div className="profile">
     <h2>Profile</h2>
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
             <button className="Save" onClick={handleSave}>Save</button>
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
           </div>
         )}
       </div>
     ) : (
       <Spinner loading={loading} />
     )}
   </div>
 );

};

export default Profile;