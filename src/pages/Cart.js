import React from "react";
import { useNavigate } from "react-router-dom";

function Cart({ cart, removeFromCart }) {
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="page">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-text">No items added.</p>
      ) : (
        cart.map((item, index) => (
          <div className="cart-item" key={index}>
            <span>{item.name}</span>
            <span>₹{item.price}</span>
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </div>
        ))
      )}

      <h3 className="total">Total: ₹{total}</h3>

      <button className="checkout-btn" onClick={() => navigate("/payment")}>
        Proceed to Payment
      </button>
    </div>
  );
}

export default Cart;