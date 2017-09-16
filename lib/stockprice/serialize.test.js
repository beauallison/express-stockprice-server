const serialize = require('./serialize');
const { response } = require('./test/fixtures');

describe('stockprice/serialize', () => {
  it('should serialize data', () =>
    expect(serialize(response)).toEqual(response));

  it('should return undefined on bad data', () =>
    expect(serialize({ latestPrice: 123, malformed: true })).toEqual({}));
});
