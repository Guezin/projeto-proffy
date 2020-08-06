import { Router } from 'express';

import ClassesController from '../controllers/ClassesController';

const routes = Router();

routes.post('/', ClassesController.create);

export default routes;
