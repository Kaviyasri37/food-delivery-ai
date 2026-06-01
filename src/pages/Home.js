import React, { useEffect, useState } from "react";
import API from "../api";

function Home({ addToCart }) {
  const [foods, setFoods] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    API.get("/foods")
      .then((res) => setFoods(res.data))
      .catch((err) => console.log(err));
  }, []);

  const categories = [
    "All",
    "Fast Food",
    "South Indian",
    "North Indian",
    "Chinese",
    "Variety Rice",
    "Sea Food",
    "Breakfast",
    "Snacks",
    "Desserts",
    "Beverages",
  ];

  const filteredFoods =
    selectedCategory === "All"
      ? foods
      : foods.filter((food) => food.category === selectedCategory);

  return (
    <div>
      <section className="hero">
        <h2>Emotion-Based AI Food Recommendation</h2>
        <p>Smart food delivery with mood-based suggestions</p>
        <a href="/emotion" className="hero-btn">
          Try AI Recommendation
        </a>
      </section>

      <section className="menu-section">
        <h2 className="section-title">Food Menu</h2>

        <div className="category-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={selectedCategory === category ? "active-category" : ""}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="food-grid">
          {filteredFoods.map((food) => (
            <div className="food-card" key={food.id}>
              <img
                src={
                  food.imageUrl ||
                  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop"
                }
                alt={food.name}
              />

              <div className="food-info">
                <h3>{food.name}</h3>
                <p>{food.category}</p>
                <small>Mood: {food.moodType}</small>

                <div className="price-cart">
                  <span>₹{food.price}</span>
                  <button onClick={() => addToCart(food)}>Add</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;