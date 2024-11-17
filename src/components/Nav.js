import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style/NavMenu.css';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav_menu">
      <p>LOGO / TITLE</p>

      <div className='flex_menu'>

        <button className="menu_toggle" onClick={toggleMenu}>
          ☰
        </button>

        <ul className={isOpen ? 'nav_open' : ''}>
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About Us</li></Link>
          <Link to="/price"><li>Price list</li></Link>
          <Link to="/contact"><li>Contact Us</li></Link>
        </ul>

      </div>

    </nav>
  );
};

export default Nav;
