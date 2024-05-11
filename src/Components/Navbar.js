

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from './Theme';
import logo from '../assets/nav_logo.webp';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import NightlightRoundedIcon from '@mui/icons-material/NightlightRounded';
import './style.css';
// import "./Navbar.css"

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>
          <NavLink exact to="/makemyweb" activeClassName="active">
            MakeMyWeb.
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/company" activeClassName="active">
            Company
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/blogs" activeClassName="active">
            Blogs
          </NavLink>
        </li>
        <li>
        <div className="theme-switcher">
          <button onClick={toggleTheme}>
            {theme === 'light' ? (
              <i className="fas fa-moon"><NightlightRoundedIcon /></i> // Light theme icon
            ) : (
              <i className="fas fa-sun"><LightModeRoundedIcon /></i> // Dark theme icon
            )}
          </button>
        </div>
        </li>
      </ul>
      {/* {!isOpen && (
       <div className="theme-switcher">
       <button onClick={toggleTheme}>
         {theme === 'light' ? (
           <i className="fas fa-moon"><NightlightRoundedIcon /></i> // Light theme icon
         ) : (
           <i className="fas fa-sun"><LightModeRoundedIcon /></i> // Dark theme icon
         )}
       </button>
     </div>
      )} */}
    </nav>
  );
};

export default Navbar;
