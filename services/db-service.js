const mongoose = require("mongoose");

const uri = process.env.MONGO_URL

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
