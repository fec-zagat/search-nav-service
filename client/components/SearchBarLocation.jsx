import React from 'react';
import '../styles/searchbar.css';
import '../styles/locationsearch.css';

const SearchBarLocation = () => (
      <div className="search-bar-nav-container-infocus">
        <div className="locationsearch-bar-container">
          <div className="search-bar-container">
            <div className="map-icon"></div>
            <input className="search-bar"
                    placeholder="a location"
            >
            </input>
          </div>
          <div className="locationsearch-bar-search-button">
            <div className="locationsearch-bar-search-button-icon"></div>
          </div>
        </div>
        <div className="search-bar-dropdown-container"></div>
      </div>
);

export default SearchBarLocation;
