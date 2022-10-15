const {Router} = require('express');
const authMiddleware = require('../middlewares/auth.middelware');
const personMiddleware = require('../middlewares/person.middleware');
const { getPerson } = require('../controllers/people.controller');
const router = Router();

router.get('/:id', getPerson);

module.exports = router;