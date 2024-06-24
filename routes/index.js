const appRouter = require('express').Router();

const { authCheck } = require('../middleware');

const protectedRoutes = require('./protected-routes');
const unProtectedRoutes = require('./un-protectes-routes');

appRouter.use('/', unProtectedRoutes);
appRouter.use('/', authCheck, protectedRoutes);

module.exports = appRouter;