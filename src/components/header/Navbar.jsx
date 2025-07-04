import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoimg from '../../assets/logo.jpg';
import { FaBars, FaTimes } from 'react-icons/fa';
import './navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('pass');
    navigate("/profile");
  };

  return (
    <div className="navigation">
      <div className="logo">
        <img src={logoimg} alt="Logo" className="lo-icon" />
        <h3 className="brand-name">M Fashion</h3>
      </div>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <ul className="list">
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li><Link to="/products" onClick={() => setMenuOpen(false)}>Product</Link></li>
          <li><Link to="/profile" onClick={() => setMenuOpen(false)}>Profile</Link></li>
          <li><Link to="/cart" onClick={() => setMenuOpen(false)}>Cart</Link></li>
          {localStorage.getItem('username') && (
            <li>
              <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </li>
          )}
        </ul>
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
};

export default Navbar;
