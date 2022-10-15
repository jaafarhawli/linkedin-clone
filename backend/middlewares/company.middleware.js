const companyMiddleware = async (req, res, next) => {
     if(req.userType === 2) {
          next();
     }
     else {
          return res.json({message: "Unauthorized"});
     }
}

module.exports = companyMiddleware;