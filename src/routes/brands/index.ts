import { createBrand, getAllBrands } from '../../controller/brands';
import { Router } from 'express';

const brandRouter = Router();

brandRouter.post('/brands', createBrand);
brandRouter.get('/brands', getAllBrands);

export default brandRouter;
