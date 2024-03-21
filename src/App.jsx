import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar/navbar';
import Calculator from './pages/calculator';
import './App.css';
import Footer from './component/Footer/Footer';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Calculator />} />
        {/* <Route path="calendar" element={<Calendar />} /> */}
        {/* <Route path="about" element={<About />} />  */}
      </Routes>
       <Footer /> 
    </Router>
  )
};

export default App;
