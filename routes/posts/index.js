const postRouter = require('express').Router();

const posts = require('./posts');

postRouter.use('/', posts);

module.exports = postRouter