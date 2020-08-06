import 'reflect-metadata';
import express, { json } from 'express';

import '../database/typeorm/connectionDB';
import '../container';

import routes from './routes';

const server = express();

server.use(json());
server.use(routes);

server.listen(3333, () => console.log('Server running on port 3333'));
