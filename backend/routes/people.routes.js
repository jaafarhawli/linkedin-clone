const {Router} = require('express');
const authMiddleware = require('../middlewares/auth.middelware');
const personMiddleware = require('../middlewares/person.middleware');
const { getPerson, editUser, editProfile, addExperience, addEducation, addLisence, addSkill, addProject, addLanguage, searchJob, easyApply, followCompany, viewPosts, viewCompany, viewJob, viewNotifications, viewJobs, viewCompanyJobs} = require('../controllers/people.controller');
const router = Router();

router.get('/person/:id', authMiddleware, getPerson);
router.put('/user', editUser);
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





module.exports = router;

