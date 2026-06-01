import React from "react";
import API from "../api";

function Payment({ cart, setCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const makePayment = async () => {
    const order = {
      customerName: "Customer",
      foodName: cart.map((item) => item.name).join(", "),
      totalAmount: total,
      status: "Order Placed",
    };

    try {
      await API.post("/orders", order);
      alert("Payment successful. Order placed!");
      setCart([]);
    } catch (error) {
      console.log(error);
      alert("Order failed");
    }
  };

  return (
    <div className="form-page">
      <div className="payment-box">
        <h2>Payment</h2>
        <h3>Total Payable: ₹{total}</h3>

        <input type="text" placeholder="Card Holder Name" />
        <input type="text" placeholder="Card Number" />
        <input type="text" placeholder="Expiry Date" />
        <input type="password" placeholder="CVV" />

        <button onClick={makePayment}>Pay Now</button>
      </div>
    </div>
  );
}

export default Payment;