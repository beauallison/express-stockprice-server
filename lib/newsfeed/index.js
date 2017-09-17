const boom = require('boom');
const request = require('request-promise-native');
const sentiment = require('./sentiment');
const serialize = require('./serialize');

const generateOpts = uri => ({
  method: 'GET',
  uri,
  resolveWithFullResponse: true,
});

module.exports = async (storyfeed) => {
  try {
    const opts = generateOpts(storyfeed);
    const { body } = await request(opts);
    const serialized = serialize(body);
    return sentiment(serialized);
  } catch (err) {
    if (err.statusCode === 404) {
      throw boom.notFound();
    }
    throw err;
  }
};
