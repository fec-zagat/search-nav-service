import React from 'react';
import propTypes from 'prop-types';
import SearchResultList from './SearchResultList.jsx';
import SearchBarLocation from './SearchBarLocation.jsx';
import '../styles/searchbar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearchBarLocation: false,
    };
  }

  handleSearchBarLocationMount() {
    this.setState({
      isSearchBarLocation: true,
    });
  }

  render() {
    return (
      <div className="search-bar-nav-container">
        { this.props.showSearchResults
          ? <div className="search-result-lists">
              <div className="search-bar-nav-container-infocus">
                <div className="search-bar-container">
                  <div className="search-icon"></div>
                  <input className="search-bar"
                        placeholder="Find a great place near you"
                        onChange={e => this.props.handleSearch(e.target.value)}
                        onClick={() => {
                          this.props.showSearchBarDropdown();
                        }}
                  >
                  </input>
                </div>
            { this.props.showSearchResults
              ? <div className="search-result-lists">
                    <SearchResultList restaurants={this.props.restaurants}
                                      goToRestaurantPage={this.props.goToRestaurantPage}
                    />
                </div> : null}
              </div>
              <SearchBarLocation restaurants={this.props.restaurants}
                        goToRestaurantPage={this.props.goToRestaurantPage}
                        handleSearchBarLocationMount={this.handleSearchBarLocationMount.bind(this)}
              />
            </div>
          : <div className="search-bar-nav-container-infocus">
              <div className="search-bar-container">
                <div className="search-icon"></div>
                  <input className="search-bar"
                         placeholder="Find a great place near you"
                         onChange={e => this.props.handleSearch(e.target.value)}
                         onClick={this.props.showSearchBarDropdown}
                  >
                  </input>
              </div>
          { this.props.showSearchResults
            ? <div className="search-result-lists">
                <SearchResultList restaurants={this.props.restaurants}
                                  goToRestaurantPage={this.props.goToRestaurantPage}
                />
              </div> : null}
            </div> }
      </div>
    );
  }
}

SearchBar.propTypes = {
  handleSearch: propTypes.func.isRequired,
  restaurants: propTypes.array.isRequired,
  goToRestaurantPage: propTypes.func.isRequired,
  showSearchResults: propTypes.bool.isRequired,
  showSearchBarDropdown: propTypes.func.isRequired,
};

export default SearchBar;
