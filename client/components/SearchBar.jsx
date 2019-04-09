import React from 'react';
import propTypes from 'prop-types';
import SearchResultList from './SearchResultList.jsx';
import '../styles/searchbar.css';

const SearchBar = props => (
  <div className="search-bar-nav-container">
    <div className="search-bar-nav-container-infocus">
      <div className="search-bar-container">
        <div className="search-icon"></div>
        <input className="search-bar"
                placeholder="Find a great place near you"
                onChange={e => props.handleSearch(e.target.value)}
                onClick={() => {
                  props.showSearchBarDropdown();
                }}
        >
        </input>
      </div>
      { props.showSearchResults
        ? <SearchResultList restaurants={props.restaurants}
                            goToRestaurantPage={props.goToRestaurantPage}
        /> : null}
    </div>
  </div>
);

SearchBar.propTypes = {
  handleSearch: propTypes.func.isRequired,
  restaurants: propTypes.array.isRequired,
  goToRestaurantPage: propTypes.func.isRequired,
  showSearchResults: propTypes.bool.isRequired,
  showSearchBarDropdown: propTypes.func.isRequired,
};

export default SearchBar;
