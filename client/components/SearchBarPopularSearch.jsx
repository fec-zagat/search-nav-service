import React from 'react';
import '../styles/popularsearch.css';

const SearchBarPopularSearch = () => (
  <div className="search-bar-dropdown-popular">
    <div className="search-bar-dropdown-popular-search">
      <div className="food-search-icon"></div>
      Breakfast
    </div>
    <div className="search-bar-dropdown-popular-search">
      <div className="coffee-search-icon"></div>
      Coffee
    </div>
    <div className="search-bar-dropdown-popular-search">
      <div className="clock-search-icon"></div>
      Quick Bites
    </div>
  </div>
);

export default SearchBarPopularSearch;
