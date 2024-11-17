// App.js
import React from 'react';
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./components/LandingPage.js";
import AboutUs from "./components/AboutUs.js";
import PriceList from './components/PriceList.js';
import Footer from "./components/footer";
import ContactUs from './components/contactUs.js';
import "react-toastify/dist/ReactToastify.css";

import './App.css';

function App() {
  return (
      <Router>
        <div className="App">
          <Nav/>

          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/price" element={<PriceList />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
