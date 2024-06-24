const rateLimiter = require('./rateLimiter');
const fileParser = require('./fileParser');
const auth = require('./auth');

module.exports = {
    ...rateLimiter,
    ...fileParser,
    ...auth
}