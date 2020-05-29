import { Router } from 'express';
import classRouter from './class.routes';

const routes = Router();

routes.use('/class', classRouter);

export default routes;
