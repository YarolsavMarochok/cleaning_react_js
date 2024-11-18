import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style/NavMenu.css';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the menu
      if (!event.target.closest('.flex_menu')) {
        closeMenu();
      }
    };

    // Add event listener for clicks
    document.addEventListener('click', handleClickOutside);

    // Cleanup listener on unmount
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className="nav_menu">
      <p>Clean Masters</p>

      <div className="flex_menu">
        <button className="menu_toggle" onClick={(e) => {
          e.stopPropagation(); // Prevent immediate close
          toggleMenu();
        }}>
          ☰
        </button>

        <ul className={isOpen ? 'nav_open' : ''}>
          <Link to="/" onClick={closeMenu}>
            <li>Home</li>
          </Link>
          <Link to="/about" onClick={closeMenu}>
            <li>About Us</li>
          </Link>
          <Link to="/price" onClick={closeMenu}>
            <li>Price list</li>
          </Link>
          <Link to="/contact" onClick={closeMenu}>
            <li>Contact Us</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
