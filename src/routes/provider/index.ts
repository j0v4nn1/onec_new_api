import { createProvider, getProviders, updateProviderContract } from '../../controller/providers';
import { Router } from 'express';

const providersRouter = Router();

providersRouter.post('/providers', createProvider);
providersRouter.get('/providers', getProviders);
providersRouter.patch('/providers/:id', updateProviderContract);

export default providersRouter;
