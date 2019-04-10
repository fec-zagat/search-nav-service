import React from 'react';
import propTypes from 'prop-types';
import '../styles/searchbar.css';

const SearchBarCuisine = props => (
  <div className="search-bar-cuisine">
    <div className="search-bar-cuisine-icon-circle">
        <div className={`cuisine-${props.cuisine} cuisine-svg`}></div>
      <div className="cuisine-text">
        {props.cuisine}
      </div>
    </div>
  </div>
);

SearchBarCuisine.propTypes = {
  cuisine: propTypes.string.isRequired,
};

export default SearchBarCuisine;
