const {Router} = require('express');
const authMiddleware = require('../middlewares/auth.middelware');
const personMiddleware = require('../middlewares/person.middleware');
const { getPerson } = require('../controllers/people.controller');
const router = Router();

router.get('/:id', authMiddleware, personMiddleware, getPerson);

module.exports = router;