import React from "react";
import { NavLink } from "react-router-dom";
import "../styling/Navbar.css";

function Navbar({ theme, setTheme }) {
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/resume" className={({ isActive }) => (isActive ? "active" : "")}>
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
            Contact
          </NavLink>
        </li>

        {/* 🌗 Theme Toggle Slider */}
        <li className="toggle-item">
          <div className="theme-toggle-wrapper">
            <input
              type="checkbox"
              id="theme-toggle"
              className="theme-toggle"
              checked={theme === "light"}
              onChange={toggleTheme}
            />
            <label htmlFor="theme-toggle" className="slider">
              <span className="sun">☀️</span>
              <span className="moon">🌙</span>
            </label>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
