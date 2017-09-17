const newsfeed = require('./');
const { options: { uri } } = require('./test/fixtures/');

jest.mock('request-promise-native', () => require('./_mocks_/request-promise-native')); // eslint-disable-line global-require

describe('newsfeed/', () => {
  it('should get company newsfeed and calculate sentiment', async () => {
    const result = await newsfeed(uri);
    expect(result).toEqual([{
      id: 74,
      headline: 'Google going strong, but maybe not for long.',
      body: 'Google has some concerns to address the balance of this year, and beyond. Over the long run, the consensus analyst recommendation for Google as a \'strong buy\' is warranted as the company continues driving a healthy double-digit top line growth. But that doesn\'t mean there won\'t be a hurdle, or three, to overcome along the way.',
      outlook: 'neutral',
    },
    {
      id: 141,
      headline: 'Ad revenues still primary source of Google revenue.',
      body: 'Investors were encouraged by a healthy gain in the number of people looking at Google\'s ads, even as the average prices for those marketing messages extended a three-and-half year slump. The market also had been bracing for more disappointing numbers, triggering a \'relief rally\' when the results weren\'t as bad as feared, BGC Partners analyst Colin Gillis said.',
      outlook: 'negative',
    }]);
  });

  it('should throw 404 on NotFoundError', async () => {
    try {
      const result = await newsfeed();
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
