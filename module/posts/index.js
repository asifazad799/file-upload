const postRouter = require('express').Router();

const posts = require('./routes');

postRouter.use('/', posts);

module.exports = postRouter