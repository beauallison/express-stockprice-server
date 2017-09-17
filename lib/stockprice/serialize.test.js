const serialize = require('./serialize');
const { response } = require('./test/fixtures');

describe('stockprice/serialize', () => {
  it('should serialize data', async () =>
    expect(await serialize(response)).toEqual(response));

  it('should return undefined on bad data', async () => {
    try {
      const result = await serialize({ latestPrice: 123, malformed: true });
      expect(result).toBeUndefined();
    } catch (err) {
      expect(err.isBoom).toBeTruthy();
      expect(err.output).toEqual({
        statusCode: 422,
        payload:
        {
          statusCode: 422,
          error: 'Unprocessable Entity',
          message: 'Unprocessable Entity',
        },
        headers: {},
      });
    }
  });
});
