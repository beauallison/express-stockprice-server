const _ = require('lodash');

module.exports = input => _(input)
  .filter(company => _.isEqual(_.keys(company), ['_id', 'name', 'tickerCode']))
  .map(company => ({
    id: _.toString(company._id), // eslint-disable-line no-underscore-dangle
    name: company.name,
    tickerCode: company.tickerCode,
  }))
  .value();

