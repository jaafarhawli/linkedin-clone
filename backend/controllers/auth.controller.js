const User = require('../models/users.model');
const Person = require('../models/people.model');
const Company = require('../models/companies.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res)=>{
    const {email, password} = req.body;
    
    const user = await User.findOne({email}).select("+password");

    if(!user) return res.status(404).json({message: "Invalid Credentials"});

    const isMatch = bcrypt.compare(password, user.password);
    if(!isMatch) return res.status(404).json({message: "Invalid Credentials"});

    const token = jwt.sign({email: user.email, userType: user.type}, process.env.JWT_SECRET_KEY, {
        expiresIn: '1h'
    });
    res.status(200).json(token)
}

const personSignup = async (req, res)=>{
    const {email, password,type,first_name,last_name,country,industry, profile_picture, education, eduction_start, education_end} = req.body;
    try{
        const user = new User();
        user.email = email;
        user.password = await bcrypt.hash(password, 10);
        user.type = type;

        await user.save();

        const person = new Person();
        person._id = user._id;
        person.firstname = first_name;
        person.lastname = last_name;
        person.country = country;
        person.industry = industry;
        person.selected_education = education,
        person.education[0] = {
            institution: education,
            startyear: eduction_start,
            endyear: education_end
        }
        if(profile_picture)
        person.profile_url = profile_picture;
        else person.profile_url = '';
        banner_url = '';
        about = '';
        headline = ''; 
        await person.save();

        const token = jwt.sign({email: user.email, userType: user.type}, process.env.JWT_SECRET_KEY, {
            expiresIn: '1h'
        });

        res.status(200).json({user, person, token});

    }catch(err){
        res.status(400).json({
            message: err.message
        })
    }
}

const companySignup = async (req, res)=>{
    const {email, password,type,name, url, website, industry, size, logo, tagline} = req.body;
    try{
        const user = new User();
        user.email = email;
        user.password = await bcrypt.hash(password, 10);
        user.type = type;

        await user.save();

        const company = new Company();
        company._id = user._id;
        company.name = name;
        company.url = url;
        if(website) 
        company.website = website;
        else company.website = '';

        company.industry = industry;
        company.size = size;
        if(logo) 
        company.logo_url = logo;
        else company.logo_url = '';

        if(tagline) 
        company.tagline = tagline;
        else company.tagline = '';

        await company.save();

        const token = jwt.sign({email: user.email, userType: user.type}, process.env.JWT_SECRET_KEY, {
            expiresIn: '1h'
        });

        res.status(200).json({user, company,token});

    }catch(err){
        res.status(400).json({
            message: err.message
        })
    }
}

module.exports = {
    login,
    personSignup,
    companySignup
}