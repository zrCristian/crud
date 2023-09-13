const { Router } = require('express');
const coursesController = require('../../controllers/api/courses');

const router = Router();

router.get('/search', coursesController.getCoursesByIds);
router.get('/', coursesController.getPaginated);

module.exports = router;
