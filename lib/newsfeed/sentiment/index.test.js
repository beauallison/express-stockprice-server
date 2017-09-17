const sentiment = require('./index');

describe('newsfeed/sentiment/', () => {
  const input = [
    {
      id: 0,
      headline: 'Post 1',
      body: 'Positively happy people in good times.',
    },
    {
      id: 1,
      headline: 'Post 1',
      body: 'Positively happy people in good times where there are Dissapointing Concerns.',
    },
    {
      id: 2,
      headline: 'Post 1',
      body: 'It is feared there will be a slump and drag while the market declines!',
    },
  ];

  it('should calculate sentiment', () =>
    expect(sentiment(input)).toEqual([{
      id: 0,
      headline: 'Post 1',
      body: 'Positively happy people in good times.',
      outlook: 'positive',
    },
    {
      id: 1,
      headline: 'Post 1',
      body: 'Positively happy people in good times where there are Dissapointing Concerns.',
      outlook: 'neutral',
    },
    {
      id: 2,
      headline: 'Post 1',
      body: 'It is feared there will be a slump and drag while the market declines!',
      outlook: 'negative',
    }]));
});

