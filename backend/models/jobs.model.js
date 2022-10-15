const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    
    title: {
        type: String,
        required: 'title is required'
    },
    location: {
        type: String,
        required: 'location is required'
    },
    description: {
        type: String,
    },
})

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;