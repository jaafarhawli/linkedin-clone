const User = require('../models/users.model');
const Person = require('../models/people.model');

const getPerson = async (req, res)=>{
    const {id} = req.params;
    const user = await User.findById(id);
    let data = await Person.findById(id);
    res.send({user, data});
}



module.exports = {
    getPerson,
}


// User.findById(id).then((user)=>res.send(user));