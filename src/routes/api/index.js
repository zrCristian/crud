const { Router } = require('express');

const coursesRouter = require('./courses');

const router = Router();

router.use('/cursos', coursesRouter);

router.get('*', (req, res) => {
  res.status(404).json({
    status: 404,
    message: 'NOT FOUND',
  });
});

module.exports = router;
