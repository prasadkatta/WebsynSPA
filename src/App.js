import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services'
import Contactus from './Components/Contactus'
import Footer from './Components/Footer';
import Breadcrumb from './Components/Breadcrumb';

function App() {
  const isSubpage = window.location.pathname == '/';
  return (
    
      <Router>
        <Header />
        <Breadcrumb />
        <Routes>
          <Route path="/" exact element={<Home />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contactus />} />
        </Routes>
        <Footer />
      </Router>
    
  );
}

export default App;
