import React from 'react';
import propTypes from 'prop-types';

const SearchResult = props => (
  <div>
    <h4>
      {props.restaurant.name}
    </h4>
    <h6>
      {props.restaurant.address.street}
    </h6>
  </div>
);

SearchResult.propTypes = {
  restaurant: propTypes.object.isRequired,
};

export default SearchResult;
