import generatedData from '../db/generateData';

describe('generatedData should match the expected data shape', () => {
  test('generatedData should have correct properties', () => {
    generatedData.forEach((data) => {
      Object.prototype.hasOwnProperty.call(data, 'name');
      Object.prototype.hasOwnProperty.call(data, 'address');
      Object.prototype.hasOwnProperty.call(data.address, 'district');
      Object.prototype.hasOwnProperty.call(data.address, 'zipCode');
      Object.prototype.hasOwnProperty.call(data.address, 'city');
      Object.prototype.hasOwnProperty.call(data, 'cuisine');
    });
  });
});
