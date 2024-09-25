
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/icons/logo.jpg'; // Import the JPG logo
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Brand Logo" className="logo-image" /> {/* Use the image */}
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/" end>Home</NavLink>
            </li>
            <li>
              <NavLink to="/student">Student</NavLink>
            </li>
            <li>
              <NavLink to="/teacher">Teacher</NavLink>
            </li>
            <li>
              <NavLink to="/admin">Admin</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
            <li>
              <NavLink to="/mcqqgeneraor">MCQ</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
