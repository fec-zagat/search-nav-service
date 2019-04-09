// Takes in a single restaurant object and creates a parsed string (e.g. 'mc-donalds-san-francisco')
const parseRestaurantUrl = (restaurant) => {
  let parsedURL = `${restaurant.name.split(' ').join('-')}-${restaurant.address.city.split(' ').join('-')}`;
  parsedURL = parsedURL.split("'").join('');
  return parsedURL.toLowerCase();
};
module.exports = parseRestaurantUrl;
