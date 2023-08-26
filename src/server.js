const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = 8080;

app.use(morgan('tiny'));

app.listen(PORT, () => {
  console.log(`[server]: running on port: ${PORT}`);
});
