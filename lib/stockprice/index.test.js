const stockprice = require('./');
const { companies, response } = require('./test/fixtures/');

describe('stockprice/', () => {
  it('should get company stockprice and ', async () => {
    const result = await stockprice(companies[0]);
    expect(result).toEqual(response);
  });

  it('should throw 404 on NotFoundError', async () => {
    try {
      const result = await stockprice();
      expect(result).toBeUndefined({});
    } catch (err) {
      expect(err.isBoom).toBeTruthy();
      expect(err.output).toEqual({
        statusCode: 404,
        payload: { statusCode: 404, error: 'Not Found', message: 'Not Found' },
        headers: {},
      });
    }
  });
});
