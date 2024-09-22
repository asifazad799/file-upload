const { Post } = require("../../models/post");

const createPost = async ({ userId, images }) => {
    try {

        const newPost = new Post({
            image: [...images ?? ''], // Array of image URLs
            title: 'My First Post',
            desc: 'This is the description of my first post.',
            user_id: userId
        });

        return await newPost.save();
    } catch (error) {
        return error
    }
}
module.exports = {
    createPost
}