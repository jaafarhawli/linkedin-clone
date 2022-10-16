const {Router} = require('express');
const authMiddleware = require('../middlewares/auth.middelware');
const companyMiddleware = require('../middlewares/company.middleware');
const { addJob, editProfile, viewAppliers } = require('../controllers/companies.controller');
const router = Router();


router.post('/add/job',  authMiddleware, companyMiddleware, addJob);
router.put('/',  editProfile);
router.get('/appliers/:id',  viewAppliers);


module.exports = router;
