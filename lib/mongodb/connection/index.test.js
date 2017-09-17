const _ = require('lodash');
const { mongo } = require('config');
const connection = require('./');

describe('mongodb/connection', () => {
  it('should connect to mongodb', async () => {
    const db = await connection();
    expect(db.databaseName).toEqual(mongo.database);
  });

  it('should throw authentication error on bad credentials', async () => {
    try {
      await connection(_.merge({}, mongo, { username: 'bad', password: 'pass' }));
    } catch (err) {
      expect(err.isBoom).toBe(true);
      expect(err.output).toEqual({
        statusCode: 401,
        payload:
        {
          statusCode: 401,
          error: 'Unauthorized',
          message: 'Unauthorized',
        },
        headers: {},
      });
    }
  });
});
