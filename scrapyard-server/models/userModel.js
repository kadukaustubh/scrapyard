const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter a Name!'],
        unique: false,
    },
    email: {
        type: String,
        required: [true, 'Please provide an Email!'],
        unique: [true, 'Email exists!'],
    },
    password: {
        type: String,
        required: [true, 'Please enter a Password!'],
        unique: false,
    },
});

const Users = mongoose.model('Users', userSchema)

module.exports = mongoose.model.Users || Users;