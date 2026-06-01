import React, { useState } from "react";
import API from "../api";

function AdminDashboard() {
  const [food, setFood] = useState({
    name: "",
    category: "",
    price: "",
    imageUrl: "",
    moodType: "",
  });

  const addFood = async (e) => {
    e.preventDefault();

    try {
      await API.post("/foods", food);
      alert("Food added successfully");
      setFood({ name: "", category: "", price: "", imageUrl: "", moodType: "" });
    } catch (error) {
      console.log(error);
      alert("Food not added");
    }
  };

  return (
    <div className="admin-container">
      <form className="form-box" onSubmit={addFood}>
        <h2>Admin Dashboard</h2>
        <h3>Add Food Item</h3>

        <input
          type="text"
          placeholder="Food Name"
          value={food.name}
          onChange={(e) => setFood({ ...food, name: e.target.value })}
          required
        />

        <select
          value={food.category}
          onChange={(e) => setFood({ ...food, category: e.target.value })}
          required
        >
          <option value="">Select Category</option>
          <option>Fast Food</option>
          <option>South Indian</option>
          <option>North Indian</option>
          <option>Chinese</option>
          <option>Variety Rice</option>
          <option>Sea Food</option>
          <option>Breakfast</option>
          <option>Snacks</option>
          <option>Desserts</option>
          <option>Beverages</option>
        </select>

        <select
          value={food.moodType}
          onChange={(e) => setFood({ ...food, moodType: e.target.value })}
          required
        >
          <option value="">Select Mood Type</option>
          <option value="happy">Happy</option>
          <option value="sad">Sad</option>
          <option value="tired">Tired</option>
          <option value="angry">Angry</option>
          <option value="neutral">Neutral</option>
        </select>

        <input
          type="number"
          placeholder="Price"
          value={food.price}
          onChange={(e) => setFood({ ...food, price: e.target.value })}
          required
        />

        <input
          type="text"
          placeholder="Image URL"
          value={food.imageUrl}
          onChange={(e) => setFood({ ...food, imageUrl: e.target.value })}
          required
        />

        <button type="submit">Add Food</button>
      </form>

      <div className="admin-banner">
        <h1>Smart Food Management</h1>
        <p>Add food items with category, mood type, price, and image.</p>
      </div>
    </div>
  );
}

export default AdminDashboard;