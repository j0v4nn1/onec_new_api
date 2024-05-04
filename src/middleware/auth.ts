import { Response, Request, NextFunction } from 'express';
import { verify, JwtPayload } from 'jsonwebtoken';
import 'dotenv/config';
import UnauthorizedError from 'errors/unauthorized-error';

const { JWT_SECRET } = process.env;

export default (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    return res.json({
      status: 'failure',
    });
  }
  const token = authorization.replace('Bearer ', '');
  let payload: string | JwtPayload;
  try {
    if (!JWT_SECRET) {
      return res.json({
        status: 'Token failure',
      });
    }
    payload = verify(token, JWT_SECRET);
  } catch (error) {
    const err = new UnauthorizedError('Authorized error');
    return next(err);
  }
  req.user = payload;
  return next();
};
