const personMiddleware = async (req, res, next) => {
     if(req.userType === 1) {
          next();
     }
     else {
          return res.json({message: "Unauthorized"});
     }

}

module.exports = personMiddleware;