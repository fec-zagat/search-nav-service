import React from 'react';
import NavBar from './NavBar.jsx';
import '../styles/index.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      term: '',
      restaurants: [],
      currentRestaurant: '',
      modalIsOpen: false,
      isLoading: true,
      animationState: 'isLoading',
      showSuggestion: false,
      showSuggestionStyle: 'hide',
    };
  }

  // When App mounts, start loading bar and remove after mock loading time
  componentDidMount() {
    const mockLoadTime = (Math.random() * 1300) + 700;
    setTimeout(() => {
      this.setState({
        animationState: 'doneLoading',
      });
    }, 250);

    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, mockLoadTime);
  }

  // Updates restaurants state and preloads images in restaurantImages
  updateRestaurants(restaurants) {
    this.setState({
      restaurants,
      showSuggestion: true,
    });
    setTimeout(() => {
      this.setState({
        showSuggestionStyle: 'show',
      });
    }, 500);
  }

  // Changes url ending to 'restaurant.name-restaurant.city'
  goToRestaurantPage(restaurant) {
    this.setState({
      currentRestaurant: restaurant,
    }, () => {
      window.location.replace(`/r/restaurant-city-${restaurant.id}`);
    });
  }

  // Call getSearchResults if term greater than 3 letters, clear results if no term in state
  handleSearch(query) {
    this.setState({
      term: query,
    }, () => {
      if (this.state.term.length === 3) {
        this.getSearchResults(this.updateRestaurants);
      } else if (this.state.term.length === 0) {
        this.setState({
          showSuggestion: false,
          showSuggestionStyle: 'hide',
        });
      }
    });
  }

  // Makes a GET request with the term's first letter, then updates restaurants with results
  getSearchResults(callback) {
    fetch(`/search/r/${this.state.term[0]}`)
      .then(res => res.json())
      .then((restaurants) => {
        callback.call(this, restaurants);
      });
  }

  render() {
    return (
      <div className="nav-loading-bar-flex">
        <NavBar handleSearch={this.handleSearch.bind(this)}
                restaurants={this.state.restaurants}
                showSuggestion={this.state.showSuggestion}
                showSuggestionStyle={this.state.showSuggestionStyle}
                goToRestaurantPage={this.goToRestaurantPage.bind(this)}
        />
          { this.state.isLoading ? <div className="loader">
            <div className={this.state.animationState}></div>
          </div> : null }
        </div>
    );
  }
}

export default App;
