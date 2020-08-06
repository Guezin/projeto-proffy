import { Router } from 'express';

import ClassesSchedulesController from '../controllers/ClassesSchedulesController';

const routes = Router();

routes.post('/', ClassesSchedulesController.create);

export default routes;
