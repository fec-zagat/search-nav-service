import React from 'react';
import propTypes from 'prop-types';
import '../styles/navbar.css';
import Modal from './Modal.jsx';
import SearchBar from './SearchBar.jsx';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearchResults: false,
      showSideMenu: false,
    };
  }

  // Changes state to render suggested restaurants dropdown area
  showSearchBarDropdown() {
    this.setState({
      showSearchResults: true,
    });
  }

  // Changes state to not render suggested restaurants dropdown area
  closeSearchBarDropdown() {
    this.setState({
      showSearchResults: false,
    });
  }

  // Toggle sideMenu by changeing state
  toggleSideMenu() {
    if (this.state.showSideMenu) {
      this.setState({
        showSideMenu: false,
      });
    } else {
      this.setState({
        showSideMenu: true,
      });
    }
  }

  render() {
    return (
      <nav className="nav-bar">
        <div className="mobile-logo-searchbar-container">
          <div className="logo-nav-container"></div>
          { this.state.showSearchResults
            ? <Modal closeSearchBarDropdown={this.closeSearchBarDropdown.bind(this)}>
                <SearchBar handleSearch={this.props.handleSearch}
                           restaurants={this.props.restaurants}
                           restaurantImages={this.props.restaurantImages}
                           showSuggestion={this.props.showSuggestion}
                           showSuggestionStyle={this.props.showSuggestionStyle}
                           goToRestaurantPage={this.props.goToRestaurantPage}
                           showSearchResults={this.state.showSearchResults}
                           showSearchBarDropdown={this.showSearchBarDropdown.bind(this)}
                />
            </Modal>
            : <SearchBar handleSearch={this.props.handleSearch}
                         restaurants={this.props.restaurants}
                         restaurantImages={this.props.restaurantImages}
                         showSuggestion={this.props.showSuggestion}
                         showSuggestionStyle={this.props.showSuggestionStyle}
                         goToRestaurantPage={this.props.goToRestaurantPage}
                         showSearchResults={this.state.showSearchResults}
                         showSearchBarDropdown={this.showSearchBarDropdown.bind(this)}
              />
          }
          <div className="menu-button"></div>
        </div>
        <div className="menu-nav-container">
          <div className="menu-container">
          <div className="menu-link">
            <a>The Latest</a>
          </div>
            <div className="menu-link">
              <a>City&apos;s Best</a>
            </div>
            <div className="menu-link" onClick={
              () => this.toggleSideMenu.call(this)}>
              <a>San Francisco </a>
              { this.state.showSideMenu ? <div className="up-chevron"></div>
                : <div className="down-chevron"></div> }
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

NavBar.propTypes = {
  handleSearch: propTypes.func.isRequired,
  restaurants: propTypes.array.isRequired,
  goToRestaurantPage: propTypes.func.isRequired,
  restaurantImages: propTypes.array.isRequired,
  showSuggestion: propTypes.bool.isRequired,
  showSuggestionStyle: propTypes.string.isRequired,
};

export default NavBar;
