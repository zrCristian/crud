const { Router } = require('express');
const { listAll } = require('../controllers/courses');

const router = Router();

router.get('/', listAll);

module.exports = router;
