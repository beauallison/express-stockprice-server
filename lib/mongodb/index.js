const connection = require('./connection');
const serialize = require('./serialize');

let companies;

const getCompanyList = async () => {
  const results = await companies.find({}).toArray();
  return serialize(results);
};

/**
 * @param {Object=} config - MongoDB configuration.
 * @returns {Object} - Returns function with getCompanyList method.
 */
module.exports = async (config) => {
  try {
    const mongo = await connection(config);
    companies = mongo.collection('company');
    return {
      getCompanyList,
    };
  } catch (err) { throw err; }
};
