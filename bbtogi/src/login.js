// Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';  // Adjust if your CSS file has a different name

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    console.log('Logging in with:', email, password);
    // Insert API call logic here
  };

  return (
    <div className="app-container">
      <div className="login-container">
        <form onSubmit={handleLogin}>
          <h2>Account Login</h2>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit">Login</button>
          <p>
            Don't have an account? <Link to="/register">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
