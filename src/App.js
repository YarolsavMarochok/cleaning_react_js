// App.js
import React from 'react';
import navMenu from "./components/navMenu";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./components/landingPage";
import AboutUs from "./components/aboutUs";
import Footer from "./components/footer";

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <navMenu/>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
