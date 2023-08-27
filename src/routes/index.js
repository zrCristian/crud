const { Router } = require('express');
const { index, loginView, registerView } = require('../controllers');

const router = Router();

router.get('/login', loginView);
router.get('/registro', registerView);
router.get('/', index);

module.exports = router;
