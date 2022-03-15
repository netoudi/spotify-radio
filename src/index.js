import server from './server.js';

server
  .listen(3333)
  .on('listening', () =>
    console.log('server running at http://127.0.0.1:3333')
  );
