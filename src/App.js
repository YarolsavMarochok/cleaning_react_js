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
import ScrollToTopButton from './components/ScrollToTopButton.js';
import CallUsButton from './components/CallUsButton.js';
import { MessageProvider } from "./components/MessageContext";


import { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [contactMessage, setContactMessage] = useState("");

  const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Event listener to detect scroll position
        const handleScroll = () => {
            if (window.scrollY > 300) { // Show button when scroll position is greater than 300px
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        // Listen for scroll events
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <MessageProvider>
      <Router>
        <div className="App">
          <Nav/>

          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/price" element={<PriceList />} />
            <Route path="/contact" element={<ContactUs message={contactMessage} />} />
          </Routes>
          <ScrollToTopButton isVisible={isVisible}/>
          <CallUsButton/>
          <Footer />

        </div>
      </Router>
      </MessageProvider>
  );
}

export default App;

