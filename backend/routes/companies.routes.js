const {Router} = require('express');
const authMiddleware = require('../middlewares/auth.middelware');
const companyMiddleware = require('../middlewares/company.middleware');
const { getCompanyData, addJob, editProfile, viewAppliers, addPost, viewFollowers, viewFollowersNumber } = require('../controllers/companies.controller');
const router = Router();


router.post('/add/job',  authMiddleware, companyMiddleware, addJob);
router.put('/',  authMiddleware, companyMiddleware, editProfile);
router.get('/appliers/:id',  authMiddleware, companyMiddleware, viewAppliers);
router.post('/add/post',  authMiddleware, companyMiddleware, addPost);
router.get('/followers/:id',  authMiddleware, companyMiddleware, viewFollowers);
router.get('/id/:email',  authMiddleware, companyMiddleware, getCompanyData);
router.get('/followers/count/:id',  viewFollowersNumber);


module.exports = router;
