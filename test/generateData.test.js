import generatedData from '../db/generateData';

describe('generatedData should match the expected data shape', () => {
  test('generatedData[0] should have correct properties', () => {
    expect(Object.prototype.hasOwnProperty.call(generatedData[0], 'name')).toBe(true);
    expect(Object.prototype.hasOwnProperty.call(generatedData[0], 'address')).toBe(true);
    expect(Object.prototype.hasOwnProperty.call(generatedData[0].address, 'district')).toBe(true);
    expect(Object.prototype.hasOwnProperty.call(generatedData[0].address, 'zipCode')).toBe(true);
    expect(Object.prototype.hasOwnProperty.call(generatedData[0].address, 'city')).toBe(true);
    expect(Object.prototype.hasOwnProperty.call(generatedData[0], 'cuisine')).toBe(true);
  });

  test('generatedData should return 100 objects', () => {
    expect(generatedData.length).toBe(100);
  });
});
