const { Router } = require('express');
const { profile, logout } = require('../controllers/users');

const router = Router();

router.post('/logout', logout);
router.get('/:id', profile);

module.exports = router;
