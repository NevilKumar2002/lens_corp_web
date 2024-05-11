import React from "react";
import EastIcon from '@mui/icons-material/East';
import aboutLatest from "../assets/aboutLatest.webp"
import "./style.css";
import { useTheme } from './Theme';

function About({ currentTheme }) {
  const { theme } = useTheme();
  return (
    <div>
      <div className="about-heading-container">
        <h1 style={{ color: currentTheme === 'dark' ? 'dark-about-heading' : 'about-heading' }}>About Us</h1>
        <div className="about-heading-underline"></div>
      </div>
      <div className="about-section-sub">
        <div className="about-section1">
          <h3>Welcome to LENS</h3>
          <p>
            We put our hearts, souls and sweat into designing and developing
            custom AI - powered solutions for your business so you don't have to.
          </p>
          <a href="/">
            <button className="learn-more-btn-about">
              <div>Learn More</div>
              <EastIcon className="east-icon" />
            </button>
          </a>
        </div>
        <div className="about-section2">
          <img src={aboutLatest} alt="image" className="about-section-image"/>
        </div>
      </div>
    </div>
  );
}

export default About;
// Navbar.js
// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { useTheme } from './Theme'
// import logo from '../assets/nav_logo.webp';
// import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
// import NightlightRoundedIcon from '@mui/icons-material/NightlightRounded';
// import './style.css';

// const Navbar = () => {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <img src={logo} alt="Logo" />
//       </div>
//       <ul className="nav-links">
//         <li>
//           <NavLink exact to="/makemyweb" activeClassName="active">
//             MakeMyWeb.
//           </NavLink>
//         </li>
//         <li>
//           <NavLink exact to="/" activeClassName="active">
//             Home
//           </NavLink>
//         </li>
//         <li>
//           <NavLink exact to="/company" activeClassName="active">
//             Company
//           </NavLink>
//         </li>
//         <li>
//           <NavLink exact to="/blogs" activeClassName="active">
//             Blogs
//           </NavLink>
//         </li>
//       </ul>
//       <div className="theme-switcher">
//         <button onClick={toggleTheme}>
//           {theme === 'light' ? (
//             <i className="fas fa-moon"><NightlightRoundedIcon /></i> // Light theme icon
//           ) : (
//             <i className="fas fa-sun"><LightModeRoundedIcon /></i> // Dark theme icon
//           )}
        
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
