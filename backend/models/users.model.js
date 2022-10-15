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
        select: false
    },
    firstname: {
        type: String,
        required: 'first name is required'
    },
    lastname: {
        type: String,
        required: 'last name is required'
    },
    country: {
        type: String,
        required: 'last name is required'
    },
    profile_url: {
        type: String,
    },
    banner_url: {
        type: String,
    },
    headline: {
        type: String,
    },
    experience: [{
        type: {
            type: String
        },
        company: String,
        startdate: Date,
        enddate: Date,
        location: String,
    }],
    skills: [{
        type: String,
    }],
    education: [{
        institution: String,
        startyear: Number,
        endyear: Number,
    }],
    lisences: [{
        title: String,
        institution: String,
        startyear: Number,
        endyear: Number,
    }],
    projects: [{
        title: String,
        institution: String,
        startyear: Number,
        endyear: Number,
        description: String,
    }],
    languages: [{
        language: String,
        level: String,
    }],
    following: [{
        type: String,
    }],
    notifications: [{
        company_id: Number,
        title: String, 
        logo: String,
        time: Date,
    }]
})

const User = mongoose.model('User', userSchema);

module.exports = User;