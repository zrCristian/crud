const express = require('express');
const methodOverride = require('method-override');
const router = require('./routes');
const coursesRouter = require('./routes/courses');

const app = express();
const PORT = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/cursos', coursesRouter);
app.use('/', router);

app.use('*', (req, res) => {
  res.status(404).render('404');
});

app.listen(PORT, () => {
  console.log(`[server]: running on port: ${PORT}`);
});
