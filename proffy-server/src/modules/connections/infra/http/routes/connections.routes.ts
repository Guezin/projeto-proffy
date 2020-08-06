import { Router } from 'express';

import ConnectionsController from '../controllers/ConnectionsController';

const routes = Router();

routes.post('/', ConnectionsController.create);

export default routes;
