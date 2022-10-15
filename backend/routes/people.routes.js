const {Router} = require('express');
const authMiddleware = require('../middlewares/auth.middelware');
const personMiddleware = require('../middlewares/person.middleware');
const { getPerson, editProfile, addExperience, addEducation, addLisence, addSkill, addProject, addLanguage, searchJob, easyApply, addJob, followCompany, viewPosts, viewCompany} = require('../controllers/people.controller');
const router = Router();

router.get('/:id', authMiddleware, personMiddleware, getPerson);
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
router.get('/company/:id', authMiddleware, personMiddleware, viewCompany);

router.post('/add', addJob);



module.exports = router;

