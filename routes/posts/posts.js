const posts = require('express').Router();

const { upload } = require('../../middleware');
const { fileScannerQueue } = require('../../scannerQueue');

posts.get('/:postId', async (req, res) => {
    const userId = req?.query?.useId;
    const postId = req.params.postId;

    if (postId) {
        res.status(200).json({
            user: userId,
            message: `post details for ${postId}`
        });
        return;
    }

    res.status(200).json({
        user: userId,
        message: 'list of posts'
    })

});

posts.post('/', upload.array('files'), (req, res) => {
    const userId = req?.query?.useId;
    const files = req.files;
    const postDetails = req.body;

    console.log(postDetails, 'hhey');

    fileScannerQueue.push({ files }, (error, result) => {
        if (error) {
            res.status(500).json({ message: 'Internal server error.', error: error.message });
        } else {
            res.status(200).json({ user: userId, ...result });
        }
    });
});

module.exports = posts