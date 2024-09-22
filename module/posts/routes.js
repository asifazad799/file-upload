const { upload } = require('../../middleware');
const { getPost, postPost } = require('./controller');

const posts = require('express').Router();

posts.post('/', upload.array('files'), postPost)
posts.get('/:postId', getPost)

module.exports = posts