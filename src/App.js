import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Footer from './Pages/Footer';
import Offer from './Pages/Offer';
import Room from './Pages/Room';
import Roomc from './Pages/Roomc';
import Function from './Pages/Function';
import Family from './Context/family-room';
import Standard from './Context/standard-room';
import Superior from './Context/superior-room';
import Bedroom from './Context/one-bedroom-suite';
import Deluxe from './Context/Deluxe-room';
import Assessible from './Context/Assessible-room';
import Dinning from './Pages/Dinning';
import Dine from './Pages/Dine';
import Check from "./Pages/Check"

import "./App.css"; 


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/family-room" element={<Family />} />
        <Route path="/standard-room" element={<Standard />} />
        <Route path="/superior-room" element={<Superior />} />
        <Route path="/one-bedroom-suite" element={<Bedroom />} />
        <Route path="/Deluxe" element={<Deluxe />} />
        <Route path="/Assessible" element={<Assessible />} />
        <Route path="/Offer" element={<Offer />} />
        <Route path="/Function" element={<Function />} />
        <Route path="/Room" element={<Room />} />
        <Route path="/Roomc" element={<Roomc />} />
        <Route path="/Dinning" element={<Dinning />} />
        <Route path="/Dine" element={<Dine />} />
        <Route path="/Check" element={<Check />} />
        <Route path="/Footer" element={<Footer />} />
      </Routes>
    </Router>
    
  );
}

export default App;
