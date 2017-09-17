const { requiredKeys } = require('./test');
const app = require('./');
const supertest = require('supertest');

describe('/app', () => {
  const request = supertest(app);

  describe('GET /', () => {
    it('should return 200 Found', () =>
      request
        .get('/')
        .expect('content-type', 'text/html; charset=UTF-8')
        .expect(200));
  });

  describe('GET /feed', () => {
    it('should return feed', () =>
      request
        .get('/feed')
        .expect('content-type', 'application/json; charset=utf-8')
        .expect(200)
        .then(({ body }) => {
          expect(body.length).toBeGreaterThanOrEqual(1);
          body.forEach((company) => {
            expect(requiredKeys.every(key => key in company)).toBeTruthy();
            expect(company.feed.length).toBeGreaterThanOrEqual(1);
          });
        }));
  });
});
