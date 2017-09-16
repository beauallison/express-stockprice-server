const { response, companies } = require('../test/fixtures');
const url = require('url');

module.exports = ({ uri }) => {
  const { path } = url.parse(uri, true);
  if (path) {
    const code = path.split('/').pop();
    if (companies.includes(code)) {
      return Promise.resolve({
        statusCode: 200,
        body: response,
      });
    }
  }

  const notFoundError = {
    statusCode: 404,
    body: 'Not found',
  };

  throw notFoundError;
};
