const User = require('../models/users.model');
const Person = require('../models/people.model');

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
    const {email, password,type,first_name,last_name,country,profile_picture} = req.body;
    try{
        const user = new User();
        user.email = email;
        user.password = await bcrypt.hash(password, 10);
        user.type = type;

        await user.save();

        const person = new Person();
        person.firstname = first_name;
        person.lastname = last_name;
        person.country = country;
        person.profile_url = profile_picture;

        await person.save();

        res.json(user, person);

    }catch(err){
        res.status(400).json({
            message: err.message
        })
    }
}

module.exports = {
    login,
    personSignup
}