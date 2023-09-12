const { initDB } = require('./config/db');
const { appConfig: { PORT } } = require('./config/env');
const app = require('./server');
const categoriesService = require('./services/CategoryService');
const logBanner = require('./utils/logs/banner');
const logger = require('./utils/logs/logger');

async function startServer() {
  logBanner();

  logger.info(`starting application with PID ${process.pid}`);
  await initDB();

  app.listen(PORT, async () => {
    logger.info(`running on port: ${PORT}`);
    app.locals.categories = await categoriesService.getAll();
  });
}

startServer();
