const {Router} = require('express');
const authMiddleware = require('../middlewares/auth.middelware');
const personMiddleware = require('../middlewares/person.middleware');
const { getPerson, editProfile, addExperience, addEducation, addLisence, addSkill, addProject, addLanguage, searchJob} = require('../controllers/people.controller');
const router = Router();

router.get('/:id', authMiddleware, personMiddleware, getPerson);
router.put('/', authMiddleware, personMiddleware, editProfile);
router.post('/experience', authMiddleware, personMiddleware, addExperience);
router.post('/education', authMiddleware, personMiddleware,addEducation);
router.post('/lisence', authMiddleware, personMiddleware, addLisence);
router.post('/skill', authMiddleware, personMiddleware, addSkill);
router.post('/project', authMiddleware, personMiddleware, addProject);
router.post('/language', authMiddleware, personMiddleware, addLanguage);
router.get('/search/:job', searchJob);



module.exports = router;

