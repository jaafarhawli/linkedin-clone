const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: 'first name is required'
    },   
    website: {
        type: String,
    },
    industry: {
        type: String,
        required: 'industry is required'
    },
    size: {
        type: Number,
        required: 'size is required'
    },
    logo_url: {
        type: String,
    },
    tagline: {
        type: String,
    },
    overview: {
        type: String,
    },
    location: {
        type: String,
    },
    posts: [{
        content: {
            type:String,
            require: 'content is required',
        },
        picture_url: String,
        date: Date
    }],
    job_ids: [{
        type: String
    }],
    people_ids: [{
        type: String
    }],
    followers_ids: [{
        type: String,
    }]
})

const Company = mongoose.model('Company', companySchema);

module.exports = Company;