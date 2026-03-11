
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/100logo.jpeg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
          }

          .navbar {
            position: sticky;
            top: 0;
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 15px 40px;
            background-color: #E6F4F1;
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          }

          .navbar img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
          }

          .nav-menu {
            display: flex;
            gap: 25px;
            align-items: center;
          }

          .nav-item {
            position: relative;
          }

          .nav-link {
            text-decoration: none;
            color: #1D5F53;
            font-weight: 600;
            position: relative;
            cursor: pointer;
          }

          .nav-link::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -5px;
            width: 0%;
            height: 2px;
            background-color: #1D5F53;
            transition: width 0.3s ease;
          }

          .nav-link:hover::after {
            width: 100%;
          }

          .nav-link:hover {
            color: black;
          }

          /* DROPDOWN */

          .dropdown {
            position: absolute;
            top: 100%;   /* FIXED */
            left: 0;     /* FIXED */
            min-width: 320px;
            background: white;
            border-radius: 8px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.15);
            padding: 20px;
            display: none;
            flex-direction: column;
            gap: 18px;
            z-index: 2000;
          }

          /* HOVER OPEN */

          .nav-item:hover .dropdown {
            display: flex;
          }

          .dropdown a {
            color: #333;
            font-weight: 600;
            text-decoration: none;
          }

          .dropdown a:hover {
            color: #1D5F53;
          }

          .hamburger {
            display: none;
            flex-direction: column;
            cursor: pointer;
            gap: 5px;
          }

          .bar {
            width: 25px;
            height: 3px;
            background-color: #1D5F53;
            border-radius: 2px;
          }

          @media (max-width: 768px) {

            .nav-menu {
              position: absolute;
              top: 70px;
              left: 0;
              width: 100%;
              background: white;
              flex-direction: column;
              align-items: center;
              gap: 20px;
              overflow: hidden;
              max-height: 0;
              transition: max-height 0.4s ease-in-out;
              box-shadow: 0 8px 20px rgba(0,0,0,0.1);
            }

            .nav-menu.open {
              max-height: 700px;
              padding: 20px 0;
            }

            .dropdown {
              position: static;
              box-shadow: none;
              padding: 10px 0;
              width: 100%;
              align-items: center;
              display: flex;
            }

            .hamburger {
              display: flex;
            }

          }
        `}
      </style>

      <nav className="navbar">
        <img src={logo} alt="logo" />

        <div className={`nav-menu ${menuOpen ? "open" : ""}`}>

          <NavLink className="nav-link" to="/" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink className="nav-link" to="/about" onClick={closeMenu}>
            About Us
          </NavLink>

          <div className="nav-item">

            <NavLink className="nav-link" to="/services">
              Our Services ▼
            </NavLink>

            <div className="dropdown">

              <NavLink to="/services/electrical" onClick={closeMenu}>
                MEP Works – Electrical
              </NavLink>

              <NavLink to="/services/hvac" onClick={closeMenu}>
                MEP Works – Hvac
              </NavLink>

              <NavLink to="/services/fire" onClick={closeMenu}>
                MEP Works – Fire & Safety
              </NavLink>

              <NavLink to="/services/ibms" onClick={closeMenu}>
                MEP Works – IBMS
              </NavLink>

            </div>

          </div>

          <NavLink className="nav-link" to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>

        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

      </nav>
    </>
  );
};

export default Navbar;

