/* eslint-disable line-comment-position */
// const rateLimit = require('express-rate-limit');
// const rateLimit = require('apicache');
const { getList, coinSuggesstionsList } = require('../controllers/coin');

// const apiLimiter = rateLimit({
//   windowMs: 1 * 60 * 1000, // 1 minutes
//   max: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
//   standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
//   legacyHeaders: false, // Disable the `X-RateLimit-*` headers
// });

// module.exports = (router) => {
//   router.get('/coins', apiLimiter, getList);
// const cache = apicache.middleware;

// module.exports = (router) => {
//   router.get('/coins', cache('4 hours'), getList);
// };
module.exports = (router) => {
  router.get('/coins', getList);
  router.get('/coins/suggestions', coinSuggesstionsList);
};
