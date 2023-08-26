const express = require('express');
const morgan = require('morgan');
const router = require('./routes');

const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(morgan('tiny'));

app.use('/', router);

app.listen(PORT, () => {
  console.log(`[server]: running on port: ${PORT}`);
});
