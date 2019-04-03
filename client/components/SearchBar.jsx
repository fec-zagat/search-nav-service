import React from 'react';
import propTypes from 'prop-types';
import SearchResultList from './SearchResultList.jsx';
import '../styles/navbar.css';

const SearchBar = props => (
    <div className="search-bar-nav-container">
      <div className=".search-bar-nav-container-infocus">
        <div className="search-bar-container">
          <div className="search-icon"></div>
          <input className="search-bar" placeholder="Find a great place near you"
                onChange={e => props.handleSearch(e.target.value)
          }>
          </input>
        </div>
        <div className="search-bar-dropdown-container">
          <SearchResultList restaurants={props.restaurants} />
        </div>
      </div>
    </div>
);

SearchBar.propTypes = {
  handleSearch: propTypes.func.isRequired,
  restaurants: propTypes.array.isRequired,
};

export default SearchBar;
