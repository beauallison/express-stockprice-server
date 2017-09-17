const { words, wordsCounter } = require('./helpers');

describe('newsfeed/sentiment/helpers', () => {
  const body = 'Happy happy happy grow drag decline concerns Drag happy!';

  describe('wordsCounter()', () => {
    it('should count positive words', () => expect(wordsCounter(words.positive, body)).toEqual(5));

    it('should count negative words', () => expect(wordsCounter(words.negative, body)).toEqual(4));
  });
});
