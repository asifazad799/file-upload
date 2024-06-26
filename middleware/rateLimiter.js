const rateLimit = require('express-rate-limit');

const rateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 1000,
    message: 'Too many upload requests from this IP, please try again later.'
});

module.exports = {
    rateLimiter
}