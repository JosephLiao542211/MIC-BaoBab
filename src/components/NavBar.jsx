import React from 'react';
import './components.css'; // Importing CSS file

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-left">
          {/* Logo */}
          <a href="#" className="logo">Logo</a>
        </div>
        <div className="navbar-center">
          {/* Tabs */}
          <ul className="navbar-nav">
            <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link">About</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Services</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
          </ul>
        </div>
        <div className="navbar-right">
          {/* Profile Picture */}
          <div className="profile-picture"></div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
