import React from 'react';
import '../styles/navbar.css';

const NavBar = () => (
  <nav className="nav-bar">
    <div className="logo-nav-container"></div>
    <div className="search-bar-nav-container">
      <div className="search-bar-container">
        <div className="search-icon"></div>
        <input className="search-bar" placeholder="Find a great place near you"></input>
      </div>
    </div>
    <div className="menu-nav-container">
      <div className="menu-container">
       <div className="menu-link">
        <a>The Latest</a>
       </div>
        <div className="menu-link">
          <a>City&apos;s Best</a>
        </div>
        <div className="menu-link">
          <a>San Francisco </a>
          <div className="down-chevron"></div>
        </div>
      </div>
    </div>
  </nav>
);

export default NavBar;
