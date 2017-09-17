const model = require('./model');

let feed;
(async () => {
  feed = await model();
})();

/**
 * GET /feed - Get the current feed.
 *
 * @param {Object} req - Request.
 * @param {Object} res - Response.
 * @param {Function} next - Next.
 */
module.exports = async (req, res, next) => {
  try {
    const results = await feed.get();
    return res.json(results);
  } catch (err) { return next(err); }
};
