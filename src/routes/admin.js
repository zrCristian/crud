const { Router } = require('express');
const { dashboard } = require('../controllers/admin');
const isAdmin = require('../middlewares/security/isAdmin');

const router = Router();

router.use(isAdmin);

router.get('/dashboard', dashboard);

module.exports = router;
