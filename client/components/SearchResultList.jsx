import React from 'react';
import propTypes from 'prop-types';
import SearchResult from './SearchResult.jsx';

const SearchResultList = props => (
  <div>
    {props.restaurants.map((restaurant, idx) => (
      <SearchResult key={idx} restaurant={restaurant}/>
    ))}
  </div>
);

SearchResultList.propTypes = {
  restaurants: propTypes.array.isRequired,
};

export default SearchResultList;
