const User = require('../models/users.model');
const Person = require('../models/people.model');
const Job = require('../models/jobs.model');
const Company = require('../models/companies.model');

const addJob = async(req, res) => {
    const { id, title, location, description} = req.body;
    const today = new Date().toLocaleString();
    const job = new Job;
    job.title = title;
    job.location = location;
    job.description = description;
    job.date = today;
    await job.save();

    Company.findById(id, async (err, company) => {
        if(err)
        res.status(404).json("company not found");
        company.job_ids.push(job._id);
        company.save();
        res.status(200).json("job added successfully");
    });
}

const viewAccount = async(req, res) => {
    const {id} = req.params;
    Company.findById(id, async (err, company) => {
        if(err)
        res.status(404).json("company not found");
        res.status(200).json(company);
    });
}

module.exports = {
    addJob,
    viewAccount
}