const mongoose = require("mongoose");

const uri = 'mongodb://127.0.0.1:27017/dea_usher_post';

async function connectToDatabase() {
    try {
        await mongoose.connect(uri, { autoIndex: true, autoCreate: true });
        console.log("Successfully connected to database");
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    connectToDatabase,
};
