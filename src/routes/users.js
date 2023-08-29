const { Router } = require('express');
const { register, login } = require('../controllers/users');

const router = Router();

router.post('/registro', register);
router.post('/login', login);

module.exports = router;
