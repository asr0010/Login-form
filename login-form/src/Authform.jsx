import React, { useState } from "react";
import "./App.css";

export default function Authform() {
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    window.location.href = "https://www.example.com";
  };

  const handleSignup = (e) => {
    e.preventDefault();
    alert("Signup successful! Now you can login.");
    setIsLogin(true);
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="form-toggle">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            Signup
          </button>
        </div>

        {isLogin ? (
          <form className="form" onSubmit={handleLogin}>
            <h2>Login</h2>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <a href="#">Forgot Password?</a>
            <button type="submit">Login</button>
            <p>
              Don’t have an account?{" "}
              <a href="#" onClick={() => setIsLogin(false)}>
                Sign Up
              </a>
            </p>
          </form>
        ) : (
          <form className="form" onSubmit={handleSignup}>
            <h2>Signup</h2>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
            <button type="submit">Signup</button>
            <p>
              Already have an account?{" "}
              <a href="#" onClick={() => setIsLogin(true)}>
                Login
              </a>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
