import React from 'react';
import propTypes from 'prop-types';
import SearchResult from './SearchResult.jsx';
import '../styles/searchbar.css';
import SearchBarCuisine from './SearchBarCuisine.jsx';
import cuisines from '../utils/cuisineList';
import SearchBarPopularSearch from './SearchBarPopularSearch.jsx';

const SearchResultList = props => (
  <div className="search-bar-dropdown-container">
  { props.showSuggestion
    ? <div>
    { props.restaurants.map((restaurant, idx) => (
      <SearchResult key={idx}
                    restaurant={restaurant}
                    showSuggestion={props.showSuggestion}
                    showSuggestionStyle={props.showSuggestionStyle}
                    goToRestaurantPage={props.goToRestaurantPage}
      />))}
    </div>
    : <div>
        <SearchBarPopularSearch />
        <div className="search-bar-dropdown-cuisines">
          { cuisines.map((cuisine, idx) => (
            <SearchBarCuisine key={idx} cuisine={cuisine}/>
          )) }
        </div>
      </div>
    }
  </div>
);

SearchResultList.propTypes = {
  restaurants: propTypes.array.isRequired,
  goToRestaurantPage: propTypes.func.isRequired,
  showSuggestion: propTypes.bool.isRequired,
  showSuggestionStyle: propTypes.string.isRequired,
};

export default SearchResultList;
