import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services'
import Contactus from './Components/Contactus'
import Footer from './Components/Footer';

function App() {
  return (
    
      <Router>
        <Header />
        <Routes>
          <Route path="/"  element={<Home />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" elements={<Contactus />} />
        </Routes>
        <Footer />
      </Router>
    
  );
}

export default App;
