const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: 'email is required',
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: 'password is required',
        minlength: 8,
        select: false
    },
    type: {
        type: Number,
        required: 'type is required'
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;