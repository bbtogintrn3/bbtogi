import React, { useState } from 'react';
import './App.css'; // Assuming the filename is App.css

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // Handle the login logic here
    console.log('Logging in with:', email, password);
    // You would typically send this information to your server via an API call
  };

  return (
    <div className="app-container">
      <div className="login-container">
        <form onSubmit={handleLogin}>
          <h2>Account Login</h2>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
          <p>
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default App;
