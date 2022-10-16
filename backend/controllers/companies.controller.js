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

const editProfile = async(req, res) => {
    const {id, ...data} = req.body
    const company = await Company.findById(id);
    const changes = {};

    if(data.name)
    changes.name = data.name;
    else
    changes.name = company.name;

    if(data.url) {
        const companies = await Company.find();
        let total_urls = [];
        companies.forEach(company => {
        total_urls = total_urls.concat(company.url);        
        });
        if (total_urls.includes(url)) 
        res.status(400).json("url already exists");
        changes.url = data.url;
    }
    else
    changes.url = company.url;
    
    if(data.website)
    changes.website = data.website;
    else
    changes.website = company.website;
    
    if(data.industry)
    changes.industry = data.industry;
    else
    changes.industry = company.industry;
    
    if(data.size)
    changes.size = data.size;
    else
    changes.size = company.size;
    
    if(data.tagline)
    changes.tagline = data.tagline;
    else
    changes.tagline = company.tagline;
    
    if(data.overview)
    changes.overview = data.overview;
    else
    changes.overview = company.overview;
    
    Company.findByIdAndUpdate(id,{
        name: changes.name,
        url: changes.url,
        website: changes.website,
        industry: changes.industry, 
        size: changes.size,
        tagline: changes.tagline,
        overview: changes.overview
    }, async (err) => {
        if(err)
        res.status(400).json("invalid input");
        res.status(200).json("company updated successfully");
    });
}


module.exports = {
    addJob,
    editProfile
}