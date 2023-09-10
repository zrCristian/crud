const initDB = require('./config/db');
const { appConfig: { PORT } } = require('./config/env');
const app = require('./server');
const logger = require('./utils/logs/logger');

async function startServer() {
  await initDB();

  app.listen(PORT, async () => {
    logger.info(`running on port: ${PORT}`);
  });
}

startServer();
