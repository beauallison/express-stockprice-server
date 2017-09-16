const requiredKeys = [
  'asOf',
  'latestPrice',
  'priceUnits',
  'storyFeedUrl',
  'tickerCode',
];

module.exports = company => (requiredKeys.every(key => key in company) ? company : {});
