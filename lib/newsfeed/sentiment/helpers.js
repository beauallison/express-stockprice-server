const positive = [
  'positive',
  'success',
  'grow',
  'gains',
  'happy',
  'healthy',
];

const negative = [
  'disappointing',
  'concerns',
  'decline',
  'drag',
  'slump',
  'feared',
];

const wordsCounter = (keys, body) => {
  let count = 0;

  keys.forEach((key) => {
    const regex = new RegExp(`${key}`, 'gi');
    count += (body.match(regex) || []).length;
  });
  return count;
};

module.exports = {
  words: {
    positive,
    negative,
  },
  wordsCounter,
};
