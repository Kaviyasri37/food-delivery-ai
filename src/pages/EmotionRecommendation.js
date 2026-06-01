import React, { useState } from "react";
import API from "../api";

function EmotionRecommendation({ addToCart }) {
  const [mood, setMood] = useState("");
  const [foods, setFoods] = useState([]);

  const getRecommendation = async (selectedMood) => {
    setMood(selectedMood);

    try {
      const res = await API.get(`/foods/recommend/${selectedMood}`);
      setFoods(res.data);
    } catch (error) {
      console.log(error);
      alert("Recommendation failed");
    }
  };

  return (
    <div className="page">
      <h2>AI Mood-Based Food Recommendation</h2>

      <div className="mood-box">
        <h3 className="section-subtitle">Select Your Mood</h3>

        <div className="mood-button-container">
          <button onClick={() => getRecommendation("happy")}>
            😊 Happy
          </button>

          <button onClick={() => getRecommendation("sad")}>
            😔 Sad
          </button>

          <button onClick={() => getRecommendation("tired")}>
            😴 Tired
          </button>

          <button onClick={() => getRecommendation("angry")}>
            😡 Angry
          </button>

          <button onClick={() => getRecommendation("neutral")}>
            😐 Neutral
          </button>
        </div>
      </div>

      {mood && (
        <h3 className="mood-title">
          Recommended foods for: {mood}
        </h3>
      )}

      <div className="food-grid">
        {foods.map((food) => (
          <div className="food-card" key={food.id}>
            <img src={food.imageUrl} alt={food.name} />

            <div className="food-info">
              <h3>{food.name}</h3>
              <p>{food.category}</p>

              <div className="price-cart">
                <span>₹{food.price}</span>

                <button onClick={() => addToCart(food)}>
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmotionRecommendation;