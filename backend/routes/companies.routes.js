const {Router} = require('express');
const authMiddleware = require('../middlewares/auth.middelware');
const companyMiddleware = require('../middlewares/company.middleware');
const { addJob, viewAccount } = require('../controllers/companies.controller');
const router = Router();


router.post('/add/job', authMiddleware, companyMiddleware, addJob);
router.get('/company/:id',  viewAccount);

module.exports = router;
