const request = require('supertest');
const app = require('../index.js');

describe('GET /search/r/:query ', () => {
  it('responds with json', (done) => {
    const testQuery = 'abc';
    request(app.listen())
      .get(`/search/r/${testQuery}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
