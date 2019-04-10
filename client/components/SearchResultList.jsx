import React from 'react';
import propTypes from 'prop-types';
import SearchResult from './SearchResult.jsx';
import '../styles/searchbar.css';
import SearchBarCuisine from './SearchBarCuisine.jsx';
import cuisines from '../utils/cuisineList';
import SearchBarPopularSearch from './SearchBarPopularSearch.jsx';

const SearchResultList = props => (
  <div className="search-bar-dropdown-container">
    <SearchBarPopularSearch />

    <div className="search-bar-dropdown-cuisines">
    { cuisines.map((cuisine, idx) => (
      <SearchBarCuisine key={idx} cuisine={cuisine}/>
    )) }
    </div>

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
