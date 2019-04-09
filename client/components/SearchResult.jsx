import React from 'react';
import propTypes from 'prop-types';
import '../styles/navbar.css';

const SearchResult = props => (
  <div className="search-bar-place-suggestion" onClick={() => props.goToRestaurantPage(props.restaurant)}>
    <img className="search-bar-place-suggestion-image" src={props.restaurant.image_url}></img>
    <div>
      <div className="search-bar-place-suggestion-title">{props.restaurant.name}
        <div className="search-bar-place-icon-logo"></div>
      </div>
      <div className="search-bar-place-suggestion-address">{props.restaurant.address.street}</div>
    </div>
  </div>
);

SearchResult.propTypes = {
  restaurant: propTypes.object.isRequired,
  goToRestaurantPage: propTypes.func.isRequired,
};

export default SearchResult;
