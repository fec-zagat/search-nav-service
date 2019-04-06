import React from 'react';
import propTypes from 'prop-types';
import '../styles/navbar.css';
import SearchBar from './SearchBar.jsx';

const NavBar = props => (
  <nav className="nav-bar">
    <div className="mobile-logo-searchbar-container">
      <div className="logo-nav-container"></div>
        <SearchBar handleSearch={props.handleSearch}
                   restaurants={props.restaurants}
        />
      <div className="menu-button"></div>
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

NavBar.propTypes = {
  handleSearch: propTypes.func.isRequired,
  restaurants: propTypes.array.isRequired,
};

export default NavBar;
