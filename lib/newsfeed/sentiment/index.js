const _ = require('lodash');
const { words, wordsCounter } = require('./helpers');

module.exports = stories =>
  stories.map((story) => {
    const output = _.cloneDeep(story);
    const positive = wordsCounter(words.positive, story.body);
    const negative = wordsCounter(words.negative, story.body);
    const value = positive - negative;

    if (value < 0) {
      output.outlook = 'negative';
    } else if (value > 1) {
      output.outlook = 'positive';
    } else {
      output.outlook = 'neutral';
    }

    return output;
  });
