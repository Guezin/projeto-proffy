import { Router } from 'express';

import ClassController from '../controllers/ClassController';

const routes = Router();
const classController = new ClassController();

routes.post('/', classController.create);

export default routes;
