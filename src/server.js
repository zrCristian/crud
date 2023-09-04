const express = require('express');
const session = require('express-session');
const router = require('./routes');
const coursesRouter = require('./routes/courses');
const usersRouter = require('./routes/users');
const { styles } = require('./views/css/constants');
const setSessionData = require('./middlewares/userSession');
const logger = require('./utils/logs/logger');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

app.locals = { styles };

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
}));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(setSessionData);

app.use('/cursos', coursesRouter);
app.use('/usuarios', usersRouter);
app.use('/', router);

app.get('*', (req, res) => {
  res.status(404).render('404');
});

app.use((err, req, res, next) => {
  if (err.status === 404 || err.status === 401) {
    return res.status(404).render('404');
  }

  logger.error(err);

  if (err) {
    return res.status(err.status || 500).json(err.message);
  }

  return next();
});

app.listen(PORT, () => {
  logger.info(`running on port: ${PORT}`);
});
