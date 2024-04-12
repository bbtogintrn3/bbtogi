// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './login';  // Ensure this points to your actual Login component file
import Register from './register';  // Ensure this points to your actual Register component file
import './App.css'; // Assuming this CSS affects the overall styling

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />  // Default route
      </Routes>
    </BrowserRouter>
  );
};

export default App;
