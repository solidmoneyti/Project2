import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar/navbar';
import Calculator from './pages/calculator';
import './App.css';
<<<<<<< HEAD
// import Card from './Card';
// import Form from './Form';
// import Location from './Location';
=======

import Form from './Form';
import Location from './Location';
>>>>>>> ee249cbc78e7f0bbbd89faabc7bcaea1e35b7996

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Calculator />} />
        {/* <Route path="calendar" element={<Calendar />} />
        <Route path="about" element={<About />} /> */}
      </Routes>
    </Router>
  )
};

export default App;
