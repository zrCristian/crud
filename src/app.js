const initDB = require('./config/db');
const { appConfig } = require('./config/env');
const app = require('./server');
const logger = require('./utils/logs/logger');

const { PORT } = appConfig;

async function startServer() {
  await initDB();

  app.listen(PORT, async () => {
    logger.info(`running on port: ${PORT}`);
  });
}

startServer();
