const {Router} = require('express');
const {login, personSignup, companySignup} = require('../controllers/auth.controller')
const router = Router();

router.post('/login', login);
router.post('/signup/person', personSignup);
router.post('/signup/company', companySignup);


module.exports = router;