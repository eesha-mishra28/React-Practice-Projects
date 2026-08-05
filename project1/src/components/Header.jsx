import React from "react";
import { Link } from "react-router-dom"; // Import Link for seamless page transitions
import "./Header.css"; // Import the CSS file

const Header = () => {
  return (
    <header className="restaurant-header">
      <div className="header-container">
        <div className="logo-area">
          <span className="logo-emoji">🍳</span>
          <h1 className="logo-text">
            Happy<span>Restaurant</span>
          </h1>
        </div>

        <nav className="nav-menu">
          <Link to="/" className="nav-item">
            Home
          </Link>
          <Link to="/about" className="nav-item">
            About
          </Link>
          <Link to="/service" className="nav-item">
            Services
          </Link>
          <Link to="/contact" className="nav-item nav-btn">
            Book a Table
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
