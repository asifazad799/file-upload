const protectedRoutes = require('express').Router();

const postRouter = require('./posts');

protectedRoutes.use('/post', postRouter);

module.exports = protectedRoutes