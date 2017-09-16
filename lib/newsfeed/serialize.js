const requiredKeys = [
  'id',
  'headline',
  'body',
];

module.exports = stories =>
  stories.filter(story => (requiredKeys.every(key => key in story)));
