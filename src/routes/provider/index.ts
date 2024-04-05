import { createProvider, getProviders } from '../../controller/providers';
import { Router } from 'express';

const providersRouter = Router();

providersRouter.post('/providers', createProvider);
providersRouter.get('/providers', getProviders);
export default providersRouter;
