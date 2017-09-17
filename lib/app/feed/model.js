const mongodb = require('../../mongodb');
const newsfeed = require('../../newsfeed');
const stockprice = require('../../stockprice');

let mongo;
let companiesList;

let companies;

const get = async () => {
  const unfiltered = await Promise.all(companiesList.map(async (company) => {
    try {
      const { tickerCode } = company;
      const output = await stockprice(tickerCode);
      const feed = await newsfeed(output.storyFeedUrl);
      output.feed = feed;
      output.name = company.name;
      return output;
    } catch (err) {
      return null;
    }
  }));

  companies = unfiltered.filter(item => item);
  return companies;
};

module.exports = async () => {
  try {
    mongo = await mongodb();
    companiesList = await mongo.getCompanyList();
    return {
      get,
    };
  } catch (err) { throw err; }
};
