import React, { useState } from "react";
import API from "../api";

function Register() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const registerUser = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/users/register", user);
      alert(res.data);
      setUser({ name: "", email: "", password: "" });
    } catch (error) {
      alert("Registration failed");
    }
  };

  return (
    <div className="form-page">
      <form className="form-box" onSubmit={registerUser}>
        <h2>Register</h2>

        <input
          type="text"
          placeholder="Full Name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;