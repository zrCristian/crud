const { Router } = require('express');
const { login, profile } = require('../controllers/users');

const router = Router();

router.post('/login', login);
router.get('/:id', profile);

module.exports = router;
