import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../client/components/App.jsx';

describe('App component build test', () => {
  const wrapper = shallow(<App />);
  test('Rendered app displays <NavBar />', () => {
    expect(wrapper.text()).toEqual('<NavBar />');
  });
});

describe('App state tests', () => {
  const wrapper = mount(<App />);
  const appInstance = wrapper.instance();

  test('updateRestaurants updates restaurant state', () => {
    appInstance.updateRestaurants([{
      address:
      {
        district: 'Hermann', zipCode: '94203', city: 'Santaview', street: '7662 Cleta Passage',
      },
      cuisine: 'Romanian',
      name: "Accusamus's",
      __v: 0,
      _id: '5c9edf65ae56cf609dfa4c15',
    }]);
    expect(wrapper.state('restaurants')[0].cuisine).toEqual('Romanian');
  });
});
