const { stockprice: { endpoint } } = require('config');
const boom = require('boom');
const request = require('request-promise-native');
const serialize = require('./serialize');

const generateOpts = tickerCode => ({
  method: 'GET',
  uri: `${endpoint}${tickerCode}`,
  resolveWithFullResponse: true,
  json: true,
});

module.exports = async (tickerCode) => {
  try {
    const opts = generateOpts(tickerCode);
    const { body } = await request(opts);
    return await serialize(body);
  } catch (err) {
    if (err.statusCode === 404) {
      throw boom.notFound();
    }
    throw err;
  }
};
