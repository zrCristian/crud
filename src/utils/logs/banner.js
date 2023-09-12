const { appConfig } = require('../../config/env');

function logBanner() {
  if (appConfig.LOG_BANNER) {
    // eslint-disable-next-line no-console
    console.log(`
  _____                                   _____ _                 _ 
 |  __ \\                                 /  __ \\ |               | |
 | |  \\/ ___ _ __ _ __ ___   __ _ _ __   | /  \\/ | ___  _   _  __| |
 | | __ / _ \\ '__| '_ \` _ \\ / _\` | '_ \\  | |   | |/ _ \\| | | |/ _\` |
 | |_\\ \\  __/ |  | | | | | | (_| | | | | | \\__/\\ | (_) | |_| | (_| |
  \\____/\\___|_|  |_| |_| |_|\\__,_|_| |_|  \\____/_|\\___/ \\__,_|\\__,_|                                                        
 `);
  }
}

module.exports = logBanner;
