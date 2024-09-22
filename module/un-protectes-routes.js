const unProtectedRoutes = require('express').Router();

const authRouter = require('./auth');

unProtectedRoutes.use('/', authRouter);

module.exports = unProtectedRoutes