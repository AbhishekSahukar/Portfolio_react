import React from "react";
import "../styling/Navbar.css"; // ✅ correct path

function Navbar({ theme, setTheme }) {
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/resume">Resume</a></li>
        <li><a href="/contact">Contact</a></li>

        {/* 🌗 Theme Toggle Slider (inline, same size) */}
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
