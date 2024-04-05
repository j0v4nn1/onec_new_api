import { Response, Request } from 'express';
import Provider from '../../models/providers';

export const createProvider = (req: Request, res: Response) => {
  Provider.create(req.body).then((provider) => {
    if (provider) {
      res.json({
        status: 'success',
        data: {
          provider,
        },
      });
    } else {
      console.log('error');
    }
  });
};

export const getProviders = (req: Request, res: Response) => {
  Provider.find().then((data) => {
    if (data) {
      res.json({
        status: 'success',
        data,
      });
    } else {
      console.log('error');
    }
  });
};

export const addContractToProvider = (req: Request, res: Response) => {};
