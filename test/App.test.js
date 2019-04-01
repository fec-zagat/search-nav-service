import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/components/App.jsx';

describe('App component build test', () => {
  const wrapper = shallow(<App />);
  test('Rendered app displays <SearchBar />', () => {
    expect(wrapper.text()).toEqual('<SearchBar />');
  });
});
