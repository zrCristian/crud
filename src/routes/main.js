const { Router } = require('express');

const indexRouter = require('./index');
const usersRouter = require('./users');
const coursesRouter = require('./courses');
const adminRouter = require('./admin');

const router = Router();

router.use('/cursos', coursesRouter);
router.use('/usuarios', usersRouter);
router.use('/admin', adminRouter);
router.use('/', indexRouter);

router.get('*', (req, res) => {
  res.status(404).render('404');
});

module.exports = router;
