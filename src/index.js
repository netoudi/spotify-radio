import server from './server.js';
import { logger } from './util.js';

server
  .listen(3333)
  .on('listening', () =>
    logger.info('server running at http://127.0.0.1:3333')
  );
