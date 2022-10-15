const {Router} = require('express');
const {login, personSignup, companySignup} = require('../controllers/auth.controller')
const router = Router();

router.post('/login', login);
router.post('/personSignup', personSignup);
router.post('/companySignup', companySignup);


module.exports = router;