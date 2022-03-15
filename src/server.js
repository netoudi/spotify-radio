import { createServer } from 'http';
import { handler } from './routes.js';

const server = createServer(handler);

export default server;
