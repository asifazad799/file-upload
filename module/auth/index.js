const authRouter = require('express').Router();

const loginRoute = require('./login');

authRouter.use(`/`, loginRoute);

module.exports = authRouter