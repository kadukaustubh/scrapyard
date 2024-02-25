const mongoose = require('mongoose');
require('dotenv').config();

async function dbConnect() {
    mongoose
        .connect(
            process.env.ATLAS_URI,
        )
        .then(() => {
            console.log('Successfully connected to MongoDB Atlas!');
        })
        .catch((error) => {
            console.log('Unable to connect to MongoDB Atlas!');
            console.log(error);
        })
}

module.exports = dbConnect;