const initDB = require('./config/db');
const app = require('./server');
const logger = require('./utils/logs/logger');

const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
  await initDB();
  logger.info(`running on port: ${PORT}`);
});
