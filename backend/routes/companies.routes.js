const {Router} = require('express');
const authMiddleware = require('../middlewares/auth.middelware');
const companyMiddleware = require('../middlewares/company.middleware');
const { addJob } = require('../controllers/companies.controller');
const router = Router();




module.exports = router;
