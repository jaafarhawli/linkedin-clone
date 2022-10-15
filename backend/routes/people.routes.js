const {Router} = require('express');
const authMiddleware = require('../middlewares/auth.middelware');
const personMiddleware = require('../middlewares/person.middleware');
const { getPerson, editProfile, addExperience, addEducation } = require('../controllers/people.controller');
const router = Router();

router.get('/:id', authMiddleware, personMiddleware, getPerson);
router.put('/', authMiddleware, personMiddleware, editProfile);
router.post('/experience', authMiddleware, personMiddleware, addExperience);
router.post('/education',  addEducation);

module.exports = router;

// authMiddleware, personMiddleware,