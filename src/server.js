const express = require('express');
const router = require('./routes');
const coursesRouter = require('./routes/courses');
const usersRouter = require('./routes/users');
const { BUTTON_CLASSES } = require('./views/css/constants');

const app = express();
const PORT = 8080;

app.locals = {
  styles: {
    buttonColor: BUTTON_CLASSES,
  },
};

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use('/cursos', coursesRouter);
app.use('/users', usersRouter);
app.use('/', router);

app.get('*', (req, res) => {
  res.status(404).render('404');
});

app.listen(PORT, () => {
  console.log(`[server]: running on port: ${PORT}`);
});
