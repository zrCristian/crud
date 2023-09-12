const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const router = require('./routes/main');
const { styles } = require('./views/css/constants');
const setSessionData = require('./middlewares/util/userSession');
const errorHandler = require('./errors/errorHandlerMiddleware');
const cookieCheck = require('./middlewares/security/cookieCheck');
const { secrets } = require('./config/env');
const morganMiddleware = require('./utils/logs/httpLogger');

const app = express();

app.locals = {
  styles,
  categories: null,
};

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(morganMiddleware);
app.use(session({
  secret: secrets.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
}));
app.use(cookieParser());
app.use(express.static('public'));
app.use(cookieCheck);
app.use(express.urlencoded({ extended: true }));
app.use(setSessionData);

app.use(router);

app.use(errorHandler);

module.exports = app;
