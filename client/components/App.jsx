import React from 'react';
import NavBar from './NavBar.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      term: '',
      restaurants: [],
    };
  }

  // Updates restaurants state
  updateRestaurants(restaurants) {
    this.setState({
      restaurants,
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
          restaurants: [],
        });
      }
    });
  }

  // Makes a GET request with the term's first letter, then updates restaurants with results
  getSearchResults(callback) {
    fetch(`http://127.0.0.1:3000/r/${this.state.term[0]}`)
      .then(res => res.json())
      .then((restaurants) => {
        callback.call(this, restaurants);
      });
  }

  render() {
    return (
      <div>
        <NavBar handleSearch={this.handleSearch.bind(this)}
                restaurants={this.state.restaurants}
        />
      </div>
    );
  }
}

export default App;
