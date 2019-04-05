import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import App from '../client/components/App.jsx';

describe('SearchBar component tests', () => {
  const wrapper = mount(<App />);
  const appInstance = wrapper.instance();
  const getSearchResults = sinon.spy(appInstance, 'getSearchResults');

  beforeEach(() => {
    wrapper.find('SearchBar').find('input').simulate('change', {
      target: { value: '' },
    });
  });

  test('handleSearch method sets the state of term to the user input query', () => {
    wrapper.find('SearchBar').find('input').simulate('change', {
      target: { value: 'hello' },
    });
    expect(wrapper.state('term')).toEqual('hello');
  });

  test('handleSearch method sets the state of restaurants to empty array when term length is not 3', () => {
    wrapper.find('SearchBar').find('input').simulate('change', {
      target: { value: 'ab' },
    });
    expect(wrapper.state('restaurants')).toEqual([]);
  });

  test('handleSearch method does not call getSearchResults when term length is not 3', () => {
    wrapper.find('SearchBar').find('input').simulate('change', {
      target: { value: 'ab' },
    });
    expect(getSearchResults).toHaveProperty('callCount', 0);
  });

  test('handleSearch method calls getSearchResults when term length greater than 3', () => {
    wrapper.find('SearchBar').find('input').simulate('change', {
      target: { value: 'abc' },
    });
    expect(getSearchResults).toHaveProperty('callCount', 1);
  });
});
