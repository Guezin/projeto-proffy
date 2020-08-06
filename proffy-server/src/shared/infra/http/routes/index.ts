import { Router } from 'express';

import userRoutes from '@modules/users/infra/http/routes/user.routes';
import classeRoutes from '@modules/classes/infra/http/routes/classes.routes';
import classesSchedulesRoutes from '@modules/classesSchedules/infra/http/routes/classesSchedules.routes';
import connectionRoutes from '@modules/connections/infra/http/routes/connections.routes';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/classes', classeRoutes);
routes.use('/classes-schedules', classesSchedulesRoutes);
routes.use('/connections', connectionRoutes);

export default routes;
