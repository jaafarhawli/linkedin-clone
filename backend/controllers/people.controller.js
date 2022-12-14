const User = require('../models/users.model');
const Person = require('../models/people.model');
const Job = require('../models/jobs.model');
const Company = require('../models/companies.model');


const getId = async (req, res) => {
    const {email} = req.params;
    User.findOne({
        email: email
   }, async (err, user) => {
    if(err)
    res.status(404).json("user not found");
    else {
        Person.findOne({
            _id: user._id
       }, async (err, person) => {
            if(err)
            res.status(404).json("user not found");
            else {
                res.status(200).json(person);
            } 
        })
    } 
})}


const getPerson = async (req, res) => {
    const {id} = req.params;
    Person.findOne({
        _id: id
   }, async (err, user) => {
    if(err)
    res.status(404).json("user not found");
    else {
        res.status(200).json(user);
    } 
})}

const editUser = async(req,res) => {
    const {id, ...data} = req.body;
    const user = await User.findById(id);
    if(data.email) {
        const exists = await User.find({email:data.email});
        if(exists[0])
        res.status(400).json("invalid input");
        user.email = data.email;
        if(data.password) {
            user.password = data.password;
        }
    }
    else {
        if(data.password) {
            user.password = data.password;
        }
    }
    user.save();
    res.status(200).json("user updated successfully");
}

const editProfile = async (req, res) => {
    const {id, ...data} = req.body
    const user = await Person.findById(id);
    const changes = {};

    if(data.firstname)
    changes.firstname = data.firstname;
    else
    changes.firstname = user.firstname;

    if(data.lastname)
    changes.lastname = data.lastname;
    else
    changes.lastname = user.lastname;
    
    if(data.headline)
    changes.headline = data.headline;
    else
    changes.headline = user.headline;
    
    if(data.industry)
    changes.industry = data.industry;
    else
    changes.industry = user.industry;
    
    if(data.location)
    changes.location = data.location;
    else
    changes.location = user.location;
    
    if(data.selected_education)
    changes.selected_education = data.selected_education;
    else
    changes.selected_education = user.selected_education;
    
    if(data.about)
    changes.about = data.about;
    else
    changes.about = user.about;
    
    Person.findByIdAndUpdate(id,{
        firstname: changes.firstname,
        lastname: changes.lastname,
        headline: changes.headline,
        industry: changes.industry, 
        location: changes.location,
        selected_education: changes.selected_education,
        about: changes.about
    }, async (err) => {
        if(err)
        res.status(400).json("invalid input");
        res.status(200).json("user updated successfully");
    });
} 

const addExperience = async(req, res) => {
    const { id ,type, company, startyear, endyear, location } = req.body;

    Person.findById(id, async (err, person) => {
        if(err)
        res.status(404).json("user not found");
        const experience = {
            type: type,
            company: company,
            startyear: startyear,
            endyear: endyear,
            lcoation: location
        };
        
        person.experience.push(experience);
        person.save();
        res.status(200).json("user updated successfully");
    })
}

const addEducation = async(req, res) => {
    const { id , institution, startyear, endyear } = req.body;

    Person.findById(id, async (err, person) => {
        if(err)
        res.status(404).json("user not found");
        const education = {
            institution: institution,
            startyear: startyear,
            endyear: endyear,
        };
        
        person.education.push(education);
        person.save();
        res.status(200).json("user updated successfully");
    })
}

const addLisence = async(req, res) => {
    const { id , title, institution, startyear, endyear } = req.body;

    Person.findById(id, async (err, person) => {
        if(err)
        res.status(404).json("user not found");
        const lisence = {
            title: title,
            institution: institution,
            startyear: startyear,
            endyear: endyear,
        };
        
        person.lisences.push(lisence);
        person.save();
        res.status(200).json("user updated successfully");
    })
}

const addSkill = async(req, res) => {
    const { id , skill } = req.body;

    Person.findById(id, async (err, person) => {
        if(err)
        res.status(404).json("user not found");
        person.skills.push(skill);
        person.save();
        res.status(200).json("user updated successfully");
    })
}

const addProject = async(req, res) => {
    const { id , title, institution, startyear, endyear, description } = req.body;

    Person.findById(id, async (err, person) => {
        if(err)
        res.status(404).json("user not found");
        const project = {
            title: title,
            institution: institution,
            startyear: startyear,
            endyear: endyear,
            description: description
        };
        
        person.projects.push(project);
        person.save();
        res.status(200).json("user updated successfully");
    })
}

const addLanguage = async(req, res) => {
    const { id , language, level } = req.body;

    Person.findById(id, async (err, person) => {
        if(err)
        res.status(404).json("user not found");
        const project = {
            language: language,
            level: level
        };
        
        person.projects.push(project);
        person.save();
        res.status(200).json("user updated successfully");
    })
}

const searchJob = async(req, res) => {
    const {job} = req.params;

    const jobs = await Job.find({description: {$regex: job, $options: 'i'}});
    res.status(200).json(jobs);
}

const easyApply = async(req, res) => {
    const {person_id, job_id} = req.body;

    Job.findById(job_id, async (err, job) => {
        if(err)
        res.status(404).json("job not found");
        job.applicants_ids.push(person_id);
        job.save();
        res.status(200).json("job updated successfully");
    });
}

const followCompany = async(req, res) => {
    const {person_id, company_id} = req.body;

    const company = await Company.findById(company_id);
    const person = await Person.findById(person_id);

    company.followers_ids.push(person_id);
    await company.save();

    person.following.push(company_id);
    await person.save();

    res.status(200).json("user updated successfully");
}

const viewPosts = async(req, res) => {
    const {id} = req.params;
    const companies = await Person.findById(id).select("-_id following");
    const posts = await Company.find().where('_id').in(companies.following).select("-_id logo_url name posts");
    let total_posts = [];
    let post_content = {};
    posts.forEach(post => {
        post_content = {logo: post.logo_url, name: post.name, posts:post.posts}
        total_posts.push(post_content);        
    });
    res.status(200).json(total_posts);
}

const viewCompany = async(req, res) => {
    const {id} = req.params;
    Company.findById(id, async(err, company) => {
        if(err)
        res.status(404).json("company not found");
        res.status(200).json(company);
    });

}

const viewJob = async(req, res) => {
    const {id} = req.params;
    Job.findById(id, async(err, job) => {
        if(err)
        res.status(404).json("job not found");
        res.status(200).json(job);
    });

}

const viewNotifications = async(req, res) => {
    const {id} = req.params;
    Person.findById(id, async(err, person) => {
        if(err)
        res.status(404).json("job not found");
        res.status(200).json(person.notifications);
    });
}

const viewJobs = async(req, res) => {
    const jobs = await Job.find().sort([['date', -1]]);
    res.status(200).json(jobs);
}

const viewCompanyJobs = async(req, res) => {
    const {id} = req.params;
    Company.findById(id, (err, company) => {
        if(err) 
        res.status(404).json("company not found");
        res.status(200).json(company.job_ids);
    })
}

const checkEmail = async(req, res) => {
    const {email} = req.params;
    User.find({
        email: email
   }, async (err, user) => {
    if(err)
    res.status(404).json("user not found");
    if(user.length>0)
    res.status(404).json("user found");
    else res.status(200).json("user not found");
})}



module.exports = {
    getId,
    getPerson,
    editUser,
    editProfile,
    addExperience,
    addEducation, 
    addLisence,
    addSkill,
    addProject,
    addLanguage,
    searchJob, 
    easyApply,
    followCompany, 
    viewPosts,
    viewCompany,
    viewJob,
    viewNotifications,
    viewJobs,
    viewCompanyJobs, 
    checkEmail
}


