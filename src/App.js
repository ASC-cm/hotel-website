import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Pages/Footer";
import Offer from "./Pages/Offer";
import Room from "./Pages/Room";
import Roomc from "./Pages/Roomc";
import Function from "./Pages/Function";
import Contact from "./Pages/Contact";
import Family from "./Context/family-room";
import Standard from "./Context/standard-room";
import Superior from "./Context/superior-room";
import Bedroom from "./Context/one-bedroom-suite";
import Deluxe from "./Context/Deluxe-room";
import Assessible from "./Context/Assessible-room";
import Booking from "./Context/Booking";
import Dinning from "./Pages/Dinning";
import Dine from "./Pages/Dine";
import Check from "./Pages/Check";
import Story from "./Pages/Story";
import Profile from "./Components/Profile";
import BookingForm from "./Components/BookingForm";
import SignUp from "./Components/SignUp";
import ProfileUpdate from "./Components/ProfileUpdate";
import ForgotPassword from "./Components/ForgotPassword";
import ResetPassword from "./Components/ResetPassword";
import Login from "./Components/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
 const [auth, setAuth] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    const checkAuth = () => {
      setAuth(!!localStorage.getItem("token"));
    };

    checkAuth();
    window.addEventListener("storage", checkAuth);

    return () => {
      window.removeEventListener("storage", checkAuth);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/family-room" element={<Family />} />
        <Route path="/standard-room" element={<Standard />} />
        <Route path="/superior-room" element={<Superior />} />
        <Route path="/one-bedroom-suite" element={<Bedroom />} />
        <Route path="/deluxe" element={<Deluxe />} />
        <Route path="/assessible" element={<Assessible />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/function" element={<Function />} />
        <Route path="/room" element={<Room />} />
        <Route path="/roomc" element={<Roomc />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/BookingForm" element={<BookingForm />} />
        <Route path="/dinning" element={<Dinning />} />
        <Route path="/dine" element={<Dine />} />
        <Route path="/check" element={<Check />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/story" element={<Story />} />
        <Route path="/api/signup" element={<SignUp />} />
        <Route
          path="/api/profile"
          element={auth ? <Profile /> : <Navigate to="/api/login" />}
        />
        <Route path="/api/login" element={<Login setAuth={setAuth} />} />
        <Route path="/api/forgot-password" element={<ForgotPassword />} />
        <Route path="/api/reset-password" element={<ResetPassword />} />
        <Route path="/api/profile-update" element={<ProfileUpdate />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
