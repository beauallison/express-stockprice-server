const serialize = require('./serialize');
const fixtures = require('./test/fixtures.json');

describe('mongodb/serialize', () => {
  it('should serialize data and remove malformed entries', () =>
    expect(serialize(fixtures)).toEqual([{
      id: '5549f199720221d21b03cb23',
      name: 'Microsoft Inc',
      tickerCode: 'MSFT',
    },
    {
      id: '5549f1a4720221d21b03cb24',
      name: 'Google Inc',
      tickerCode: 'GOOG',
    },
    {
      id: '5549f1ad720221d21b03cb25',
      name: 'Apple Inc',
      tickerCode: 'AAPL',
    },
    {
      id: '5549f1b7720221d21b03cb26',
      name: 'Facebook Inc',
      tickerCode: 'FB',
    },
    {
      id: '5549f1c1720221d21b03cb27',
      name: 'Pearson Plc',
      tickerCode: 'PSON',
    }]));

  it('should serialize empty data', () =>
    expect(serialize([])).toEqual([]));
});
