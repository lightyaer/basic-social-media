const expect = require('expect');
const request = require('supertest');

const { app } = require('../index');

describe('api/users', () => {
  it('GET ALL USERS', (done) => {
    request(app)
      .get('/api/user?page=1')
      .expect(200)
      .expect((res) => {
        expect(res.body.docs.length).toBe(15);
      })
      .end(done);
  });
});
