const boom = require('boom');
const config = require('config');
const mongoUriBuilder = require('mongodb-uri');
const mongodb = require('mongodb');

module.exports = async (input) => {
  try {
    const connectionString = mongoUriBuilder.format(input || config.mongo);
    const db = await mongodb.MongoClient.connect(connectionString);
    return db;
  } catch (err) {
    if (err.message === 'Authentication failed.') {
      throw boom.unauthorized();
    } else {
      throw boom.serverUnavailable();
    }
  }
};
