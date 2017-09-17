const boom = require('boom');

const requiredKeys = [
  'asOf',
  'latestPrice',
  'priceUnits',
  'storyFeedUrl',
  'tickerCode',
];

module.exports = async (company) => {
  if (requiredKeys.every(key => key in company)) {
    return Promise.resolve(company);
  }
  throw boom.badData();
};
