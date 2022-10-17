const Person = require('../models/people.model');

const uploadImage = (req, res, next) => {
    const {id} = req.body;
    const url = req.protocol + '://' + req.get('host')
    Person.findById(id, async (err, user) => {
        if(err)
        res.status(404).json("user not found");
        user.profile_url = url + '/public/' + req.file.filename;
        user.save().then(result => {
        res.status(201).json({
            message: "Profile updated successfully!",    
            profile_url: result.profileImg
        })
    }).catch(err => {
        console.log(err),
            res.status(500).json({
                error: err
            });
    })
    })
}

const uploadBanner = (req, res, next) => {
    const {id} = req.body;
    const url = req.protocol + '://' + req.get('host')
    Person.findById(id, async (err, user) => {
        if(err)
        res.status(404).json("user not found");
        user.banner_url = url + '/public/' + req.file.filename;
        user.save().then(result => {
        res.status(201).json({
            message: "banner updated successfully!",    
            banner_url: result.profileImg
        })
    }).catch(err => {
        console.log(err),
            res.status(500).json({
                error: err
            });
    })
    })
}



module.exports = {
    uploadImage,
    uploadBanner
}