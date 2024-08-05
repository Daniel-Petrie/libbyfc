import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/create-flash-cards" className="navbar-link">Create Flash Cards</Link>
          </li>
          <li className="navbar-item">
            <Link to="/view-flash-cards" className="navbar-link">View Flash Cards</Link>
          </li>
          <li className="navbar-item">
            <Link to="/create-flash-cards" className="navbar-link">Pet</Link>
          </li>
        </ul>
      </nav>
    );
  }

export default Navbar;