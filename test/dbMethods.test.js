const request = require('supertest');
const app = require('../index.js');

describe('GET /r ', () => {
  it('responds with json', (done) => {
    request(app.listen())
      .get('/r')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
