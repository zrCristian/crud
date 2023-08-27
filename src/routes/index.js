const { Router } = require('express');
const { index, loginView } = require('../controllers');

const router = Router();

router.get('/login', loginView);
router.get('/', index);

module.exports = router;
