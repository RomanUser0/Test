import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar.js';
import Login from './pages/login/login.js';
import Registration from './pages/registration/registartion.js';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>


   
    </div>
  );
}

export default App;
