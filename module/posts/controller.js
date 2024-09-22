const { fileScannerQueue } = require('../../scannerQueue');
const { createPost } = require('./operations');


const getPost = async (req, res) => {
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

}

const postPost = async (req, res) => {
    const userId = req?.query?.useId;
    const files = req.files;
    const postDetails = req.body;

    console.log(postDetails, 'hhey asif');

    fileScannerQueue.push({ files }, async (error, result) => {
        if (error) {
            res.status(500).json({ message: 'Internal server error.', error: error.message });
        } else {
            try {
                const isCreated = await createPost({ userId: userId, images: null });
                res.status(200).json({ user: userId, hey: "heyaf jsj   7838gj", ...result, isCreated });
            } catch (error) {
                res.status(500).json({ message: 'Internal server error.', error: error.message });
            }
        }
    });
}

module.exports = {
    getPost,
    postPost
}