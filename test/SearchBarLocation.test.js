import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import SearchBar from '../client/components/SearchBar.jsx';

describe('SearchBar component tests', () => {
  const mockFn = () => {};
  const wrapper = mount(<SearchBar
                         handleSearch={mockFn}
                         restaurants={[]}
                         goToRestaurantPage={mockFn}
                         showSearchResults={false}
                         showSearchBarDropdown={mockFn}
                         showSuggestion={false}
                         showSuggestionStyle={''}/>);
  const SearchBarInstance = wrapper.instance();
  const handleSearchBarLocationMount = sinon.spy(SearchBarInstance, 'handleSearchBarLocationMount');

  test('handleSearchBarLocationMount sets isSearchBarLocation to true', () => {
    handleSearchBarLocationMount.call(SearchBarInstance); // Mounts SearchBarLocation component
    expect(wrapper.state('isSearchBarLocation')).toEqual(true);
  });
});
