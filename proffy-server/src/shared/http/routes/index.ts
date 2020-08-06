import { Router } from 'express';

import ClassesController from '../../../controllers/ClassesController';

const routes = Router();

routes.use('/classes', ClassesController.create);

export default routes;
