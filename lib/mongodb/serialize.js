const _ = require('lodash');

module.exports = input => _(input)
  .filter(company => ['_id', 'name', 'tickerCode'].every(key => key in company))
  .map(company => ({
    id: _.toString(company._id), // eslint-disable-line no-underscore-dangle
    name: company.name,
    tickerCode: company.tickerCode,
  }))
  .value();

