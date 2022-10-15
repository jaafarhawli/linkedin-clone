const {Router} = require('express');
const authMiddleware = require('../middlewares/auth.middelware');
const personMiddleware = require('../middlewares/person.middleware');
const router = Router();



module.exports = router;