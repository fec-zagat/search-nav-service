const Faker = require('Faker');

const generatedData = [];
const numberOfDocuments = 100;
let cuisineIncrement = 0;
let imageIncrement = 1;
let districtName;
const cuisines = ['Argentina', 'Cajun', 'Estonian', 'Chinese', 'Filipino', 'Italian', 'Korean',
  'Mexican', 'Polish', 'Romanian', 'Russian', 'Thai', 'Pakistani', 'Japanese', 'Nepalese',
  'Peruvian', 'Portuguese', 'Brazilian', 'Malaysian', 'Indian',
];


// Capitalizes strings
const capitalize = word => word.charAt(0).toUpperCase() + word.slice(1);

// Create a certain numberOfDocuments with restaurant info
for (let i = 0; i < numberOfDocuments; i += 1) {
  const document = {};
  let restaurantName;

  // Create two different prefixes/suffixes for restaraunt names
  if (i % 2 === 0) {
    restaurantName = `The ${capitalize(Faker.Lorem.words()[0])}`;
  } else {
    restaurantName = `${capitalize(Faker.Lorem.words()[0])}'s`;
  }
  document.name = restaurantName;

  // Create adress information
  document.address = {};
  if (i % 5 === 0) {
    [districtName] = Faker.Address.streetName().split(' ');
  }
  document.address.district = districtName;
  document.address.zipCode = Faker.Address.zipCode().slice(0, 5);
  document.address.city = Faker.Address.city();
  document.address.street = Faker.Address.streetAddress();

  // Create cuisine information from cuisine list
  document.cuisine = cuisines[cuisineIncrement];
  if (cuisineIncrement >= cuisines.length - 1) {
    cuisineIncrement -= (cuisines.length - 1);
  } else {
    cuisineIncrement += 1;
  }

  // Create image infomration
  if (imageIncrement >= 10) {
    imageIncrement -= 9;
  } else {
    imageIncrement += 1;
  }
  document.image_url = `${Faker.Image.food()}/${imageIncrement}`;

  generatedData.push(document);
}

module.exports = generatedData;
