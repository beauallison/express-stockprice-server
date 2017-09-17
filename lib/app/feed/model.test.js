const model = require('./model');

describe('app/feed/model', () => {
  let feed;

  const requiredKeys = [
    'asOf',
    'latestPrice',
    'priceUnits',
    'storyFeedUrl',
    'tickerCode',
    'feed',
  ];

  it('should return get', async () => {
    feed = await model();
    expect(Object.keys(feed)).toEqual(['get']);
  });

  it('should return company stockprice and newsfeed', async () => {
    const output = await feed.get();
    expect(output.length).toBeGreaterThanOrEqual(1);
    output.forEach((company) => {
      expect(requiredKeys.every(key => key in company)).toBeTruthy();
      expect(company.feed.length).toBeGreaterThanOrEqual(1);
    });
  });
});
