import React from 'react';
import './style/ScrollToTopButton.scss';

const ScrollToTopButton = ({ isVisible }) => {
    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // smooth scroll effect
        });
    };

    return (
        <button
            className={`scroll-to-top-btn ${isVisible ? 'visible' : ''}`}
            onClick={scrollToTop}
        >
            ↑
        </button>
    );
};

export default ScrollToTopButton;
