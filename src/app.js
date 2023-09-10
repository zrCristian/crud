const initDB = require('./config/db');
const app = require('./server');
const logger = require('./utils/logs/logger');

const PORT = process.env.PORT || 8080;

async function startServer() {
  await initDB();

  app.listen(PORT, async () => {
    logger.info(`running on port: ${PORT}`);
  });
}

startServer();
