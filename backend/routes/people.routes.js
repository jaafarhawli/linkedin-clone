const {Router} = require('express');
const multer = require('multer');
const authMiddleware = require('../middlewares/auth.middelware');
const personMiddleware = require('../middlewares/person.middleware');
const { getId ,getPerson, editUser, editProfile, addExperience, addEducation, addLisence, addSkill, addProject, addLanguage, searchJob, easyApply, followCompany, viewPosts, viewCompany, viewJob, viewNotifications, viewJobs, viewCompanyJobs, checkEmail} = require('../controllers/people.controller');
const router = Router();


router.get('/person/id/:email', authMiddleware, getId);
router.get('/person/:id', authMiddleware, getPerson);
router.put('/user', authMiddleware, editUser);
router.put('/', authMiddleware, personMiddleware, editProfile);
router.post('/experience', authMiddleware, personMiddleware, addExperience);
router.post('/education', authMiddleware, personMiddleware,addEducation);
router.post('/lisence', authMiddleware, personMiddleware, addLisence);
router.post('/skill', authMiddleware, personMiddleware, addSkill);
router.post('/project', authMiddleware, personMiddleware, addProject);
router.post('/language', authMiddleware, personMiddleware, addLanguage);
router.get('/search/:job', authMiddleware, personMiddleware, searchJob);
router.post('/apply', authMiddleware, personMiddleware, easyApply);
router.post('/follow', authMiddleware, personMiddleware,followCompany);
router.get('/posts/:id', authMiddleware, personMiddleware, viewPosts);
router.get('/company/:id', authMiddleware, viewCompany);
router.get('/job/:id', authMiddleware, viewJob);
router.get('/notifications/:id', authMiddleware, personMiddleware, viewNotifications);
router.get('/jobs', authMiddleware, personMiddleware, viewJobs);
router.get('/company/jobs/:id', authMiddleware, viewCompanyJobs);
router.get('/check/:email', checkEmail);





module.exports = router;

