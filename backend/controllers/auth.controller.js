const User = require('../models/users.model');
const Person = require('../models/people.model');
const Company = require('../models/companies.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var validator = require("email-validator");


const login = async (req, res)=>{
    const {email, password} = req.body;
    
    const user = await User.findOne({email}).select("+password");

    if(!user) return res.status(404).json({message: "Invalid Credentials"});
    
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) return res.status(404).json({message: "Invalid Credentials"});

    const token = jwt.sign({email: user.email, userType: user.type}, process.env.JWT_SECRET_KEY, {
        expiresIn: '1h'
    });
    res.status(200).json(token)
}

const personSignup = async (req, res)=>{
    const {email, password,first_name,last_name,country,industry,  education, eduction_start, education_end} = req.body;

    if(password.length < 8)
    return res.status(400).json("Invalid input");
     
    const validate = validator.validate(email); 
    if(!validate)
    return res.status(400).json("Invalid input");
    
    try{
        const user = new User();
        user.email = email;
        user.password = await bcrypt.hash(password, 10);
        user.type = 1;

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
        person.profile_url = '';
        person.banner_url = '';
        person.about = '';
        person.headline = ''; 
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
    const {email, password,name, url, website, location, industry, size, tagline} = req.body;
    const companies = await Company.find();
    let total_urls = [];
    companies.forEach(company => {
        total_urls = total_urls.concat(company.url);        
    });
    if (total_urls.includes(url)) 
    res.status(400).json("url already exists");
    res.status(400).json("companies");

    if(password.length < 8)
    return res.status(400).json("Invalid input");
     
    const validate = validator.validate(email); 
    if(!validate)
    return res.status(400).json("Invalid input");

    try{
        const user = new User();
        user.email = email;
        user.password = await bcrypt.hash(password, 10);
        user.type = 2;

        await user.save();

        const company = new Company();
        company._id = user._id;
        company.name = name;
        company.url = url;
        company.location = location;
        if(website) 
        company.website = website;
        else company.website = '';

        company.industry = industry;
        company.size = size;
        if(logo) 
        company.logo_url = '';

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