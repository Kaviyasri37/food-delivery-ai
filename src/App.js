import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FaShoppingCart, FaRobot } from "react-icons/fa";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import EmotionRecommendation from "./pages/EmotionRecommendation";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (food) => {
    setCart([...cart, food]);
    alert(food.name + " added to cart");
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <BrowserRouter>
      <nav className="navbar">
        <h1>FoodExpress AI</h1>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/emotion"><FaRobot /> AI Recommend</Link>
          <Link to="/cart"><FaShoppingCart /> Cart ({cart.length})</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/admin">Admin</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/emotion" element={<EmotionRecommendation addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="/payment" element={<Payment cart={cart} setCart={setCart} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;