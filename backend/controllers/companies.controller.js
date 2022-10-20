const Job = require('../models/jobs.model');
const Company = require('../models/companies.model');
const User = require('../models/users.model');

const getCompanyData = async (req, res) => {
    const {email} = req.params;
    User.findOne({
        email: email
   }, async (err, user) => {
    if(err)
    res.status(404).json("user not found");
    else {
        Company.findOne({
            _id: user._id
       }, async (err, company) => {
            if(err)
            res.status(404).json("user not found");
            else {
                res.status(200).json(company);
            } 
        })
    } 
})}


const addJob = async(req, res) => {
    const { id, title, location, description} = req.body;
    const today = new Date().toLocaleString();
    const job = new Job;
    job.title = title;
    job.location = location;
    job.description = description;
    job.date = today;
    job.company_id = id;
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
    
    if(data.website)
    changes.website = data.website;
    else
    changes.website = company.website;
    
    if(data.location)
    changes.location = data.location;
    else
    changes.location = company.location;
    
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

const viewAppliers = async(req, res) => {
    const {id} = req.body;
    Job.find({company_id: id}, async (err, jobs) => {
        if(err)
        res.status(404).json("company not found");
        let applicants = [];
        jobs.forEach(job => {
            applicants = applicants.concat(job.applicants_ids)
        })
        res.status(200).json(applicants);
    });
}

const addPost = async(req, res) => {
    const { id , ...data} = req.body;

    Company.findById(id, async (err, company) => {
        if(err)
        res.status(404).json("company not found");
        if(!data.picture_url)
        data.picture_url = '';
        const post = {
            content: data.content, 
            picture_url: data.picture_url,
            date: data.date,
        };
        
        company.posts.push(post);
        company.save();
        res.status(200).json("company updated successfully");
    })
}

const viewFollowers = async(req, res) => {
    const {id} = req.params;
    Company.findById(id, async (err, company) => {
        if(err)
        res.status(404).json("company not found");
        res.status(200).json(company.followers_ids);
    });
}

const viewFollowersNumber = async(req, res) => {
    const {id} = req.params;
    Company.findById(id, async (err, company) => {
        if(err)
        res.status(404).json("company not found");
        res.status(200).json(company.followers_ids.length);
    });
}


module.exports = {
    getCompanyData,
    addJob,
    editProfile,
    viewAppliers,
    addPost, 
    viewFollowers, viewFollowersNumber
}