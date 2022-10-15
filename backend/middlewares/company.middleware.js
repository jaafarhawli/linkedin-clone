const companyMiddleware = async (req, res, next) => {
    if(req.user.userType === 2){
         next()
    }
     return res.status(401).json({message: "Unauthorized"});
}

module.exports = companyMiddleware;