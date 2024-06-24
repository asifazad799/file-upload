const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const postSchema = new mongoose.Schema(
    {
        image: { type: [String], },
        title: { type: String },
        desc: { type: String },
        auther: { type: Number, required: true }
    },
    { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = {
    Post,
};
