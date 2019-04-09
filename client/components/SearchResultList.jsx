import React from 'react';
import propTypes from 'prop-types';
import SearchResult from './SearchResult.jsx';
import '../styles/searchbar.css';

const SearchResultList = props => (
  <div className="search-bar-dropdown-container">
    {props.restaurants.map((restaurant, idx) => (
      <SearchResult key={idx}
                    restaurant={restaurant}
                    goToRestaurantPage={props.goToRestaurantPage}
      />
    ))}
  </div>
);

SearchResultList.propTypes = {
  restaurants: propTypes.array.isRequired,
  goToRestaurantPage: propTypes.func.isRequired,
};

export default SearchResultList;
