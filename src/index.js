import config from './config.js';
import server from './server.js';
import { logger } from './util.js';

server
  .listen(config.port)
  .on('listening', () =>
    logger.info(`server running at http://127.0.0.1:${config.port}`)
  );
