const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const ratingSchema = new mongoose.Schema(
    {
        totalRatings: { type: Number, default: 0 },
        totalUsersRated: { type: Number, default: 0 }
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);

ratingSchema.virtual('average').get(function () {
    if (this.totalUsersRated === 0) {
        return 0;
    }
    return this.totalRatings / this.totalUsersRated;
});

const postSchema = new mongoose.Schema(
    {
        image: { type: [String], },
        title: { type: String },
        desc: { type: String },
        auther: { type: Number, required: true }, // this will be changed with userId (ObjectId)
        rating: { type: ratingSchema }
    },
    { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = {
    Post,
};
