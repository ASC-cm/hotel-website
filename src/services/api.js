// src/api.js

import axios from "axios";

// Set the base URL for your API requests
const API_BASE_URL = "http://localhost:8000/api";

// Function to handle user signup
export const signupUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/signup/`, userData);
    return response.data;
  } catch (error) {
    console.error("Error during signup:", error);
    throw error;
  }
};

// Function to handle user login
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login/`, credentials);
    return response.data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

// Function to handle forgot password
export const forgotPassword = async (email) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/forgot-password/`, {
      email,
    });
    return response.data;
  } catch (error) {
    console.error("Error during forgot password:", error);
    throw error;
  }
};

// Function to handle password reset
export const resetPassword = async (otp, newPassword) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/reset-password/`, {
      otp,
      newPassword,
    });
    return response.data;
  } catch (error) {
    console.error("Error during reset password:", error);
    throw error;
  }
};

// Function to refresh the authentication token
export const refreshAuthToken = async () => {
  const refreshToken = localStorage.getItem("refreshToken");

  if (!refreshToken) {
    console.warn("No refresh token found. User needs to log in again.");
    localStorage.removeItem("authToken");
    return null;
  }

  try {
    const response = await axios.post(`${API_BASE_URL}/token/refresh/`, {
      refresh: refreshToken,
    });

    const newAccessToken = response.data.access;
    localStorage.setItem("authToken", newAccessToken); // Update token in storage
    return newAccessToken;
  } catch (error) {
    console.error("Error refreshing token:", error.response?.data || error.message);
    localStorage.removeItem("authToken");
    localStorage.removeItem("refreshToken"); // Clear both tokens
    return null;
  }
};

// Function to fetch user profile
export const fetchProfile = async () => {
  let token = localStorage.getItem("authToken");

  if (!token) {
    console.warn("No authentication token found, skipping profile fetch.");
    return null;
  }

  try {
    const response = await axios.get(`${API_BASE_URL}/profile/`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  } catch (error) {
    if (error.response?.status === 401) {
      console.warn("Token expired. Attempting to refresh...");
      token = await refreshAuthToken();
      if (token) {
        return fetchProfile(); // Retry with new token
      }
    }

    console.error("Error fetching profile:", error.response?.data || error.message);
    return null;
  }
};

// Function to update user profile
export const updateProfile = async (profileData) => {
  let token = localStorage.getItem("authToken");

  if (!token) {
    console.warn("No authentication token found, skipping profile update.");
    return null;
  }

  try {
    const response = await axios.put(`${API_BASE_URL}/profile-update/`, profileData, {
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    });

    return response.data;
  } catch (error) {
    if (error.response?.status === 401) {
      console.warn("Token expired. Attempting to refresh...");
      token = await refreshAuthToken();
      if (token) {
        return updateProfile(profileData); // Retry with new token
      }
    }

    console.error("Error updating profile:", error.response?.data || error.message);
    return null;
  }
};
// export const fetchProfile = async () => {
//     const token = localStorage.getItem('authToken'); // Ensure token key is consistent
//     if (!token) {
//       throw new Error('No token found');
//     }

//     try {
//       const response = await axios.get(`${API_BASE_URL}/profile/${profileId}`, {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//         },
//       });
//       return response.data;
//     } catch (error) {
//       console.error('Error during fetch profile:', error.response ? error.response.data : error.message);
//       throw error;
//     }
//   };
