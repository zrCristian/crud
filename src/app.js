const app = require('./server');
const logger = require('./utils/logs/logger');

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  logger.info(`running on port: ${PORT}`);
});
