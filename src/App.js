import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar.js';
import Login from './pages/login/login.js';
import Registration from './pages/registration/registartion.js';
import Style from "./App.module.css"


function App() {
  return (
    <div className={Style.app}>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>


   
    </div>
  );
}

export default App;
