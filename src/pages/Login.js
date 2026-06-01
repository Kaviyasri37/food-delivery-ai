import React, { useState } from "react";
import API from "../api";

function Login() {
  const [user, setUser] = useState({ email: "", password: "" });

  const loginUser = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/users/login", user);
      alert(res.data);
    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <div className="form-page">
      <form className="form-box" onSubmit={loginUser}>
        <h2>Login</h2>

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

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;