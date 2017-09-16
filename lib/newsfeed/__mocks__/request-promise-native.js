const { response, options } = require('../test/fixtures');

module.exports = (opts) => {
  if (opts.uri === options.uri) {
    Promise.resolve({
      statusCode: 200,
      body: response,
    });
  }

  const notFoundError = {
    statusCode: 404,
    body: 'Not found',
  };

  throw notFoundError;
};
