const { Router } = require('express');
const { listAll, createView, create } = require('../controllers/courses');
const validateCourse = require('../middlewares/validateCourse');

const router = Router();

router.get('/', listAll);
router.get('/crear', createView);

router.post('/crear', validateCourse, create);

module.exports = router;
