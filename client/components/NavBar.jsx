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

  render() {
    return (
      <nav className="nav-bar">
        <div className="mobile-logo-searchbar-container">
          <div className="logo-nav-container"></div>
          { this.state.showSearchResults
            ? <Modal closeSearchBarDropdown={this.closeSearchBarDropdown.bind(this)}>
                <SearchBar handleSearch={this.props.handleSearch}
                           restaurants={this.props.restaurants}
                           goToRestaurantPage={this.props.goToRestaurantPage}
                           showSearchResults={this.state.showSearchResults}
                           showSearchBarDropdown={this.showSearchBarDropdown.bind(this)}
                />
            </Modal>
            : <SearchBar handleSearch={this.props.handleSearch}
                         restaurants={this.props.restaurants}
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
            <div className="menu-link">
              <a>San Francisco </a>
              <div className="down-chevron"></div>
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
};

export default NavBar;
