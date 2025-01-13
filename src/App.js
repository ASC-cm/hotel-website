import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Footer from './Pages/Footer';
import Offer from './Pages/Offer';
import Function from './Pages/Function';
import { CartProvider } from './Context/CartContext';
import "./App.css"; 


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product/:id" element={<Product />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/CartContext" element={<CartProvider />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Offer" element={<Offer />} />
        <Route path="/Function" element={<Function />} />
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;
