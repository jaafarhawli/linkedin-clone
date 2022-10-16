const {Router} = require('express');
const authMiddleware = require('../middlewares/auth.middelware');
const companyMiddleware = require('../middlewares/company.middleware');
const { addJob, editProfile, viewAppliers, addPost, viewFollowers } = require('../controllers/companies.controller');
const router = Router();


router.post('/add/job',  authMiddleware, companyMiddleware, addJob);
router.put('/',  editProfile);
router.get('/appliers/:id',  viewAppliers);
router.post('/add/post',  addPost);
router.get('/followers/:id',  viewFollowers);


module.exports = router;
