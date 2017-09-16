const mongodb = require('./');

describe('mongodb/', () => {
  let mongo;

  it('should return getCompanyList', async () => {
    mongo = await mongodb();
    expect(Object.keys(mongo)).toEqual(['getCompanyList']);
  });

  it('should return company results', async () => {
    const results = await mongo.getCompanyList();
    expect(results).toEqual([{
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
    }]);
  });
});
