const _ = require('lodash');

module.exports = input => _(input)
  .filter(company => _.isEqual(_.keys(company), ['_id', 'name', 'tickerCode']))
  .map(company => _.mapKeys(company, (value, key) => {
    if (key === '_id') { return 'id'; }
    return key;
  }))
  .value();
