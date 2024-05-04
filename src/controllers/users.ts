import { NextFunction, Request, Response } from 'express';
import User from '../models/users';
import NotFoundError from '../errors/not-found-error';
import { error } from 'winston';
import userService from '../service/user-service';
import ServerSideError from '../errors/server-side-error';
import { REGISTRATION_ERROR } from '../constants/messages';

export const registration = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, passport } = req.body;
    const user = await userService.registration(req.body, { name, email, passport });
    if (!user) {
      throw new ServerSideError(REGISTRATION_ERROR);
    }
    res.json({
      status: 'success',
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = (req: Request, res: Response, next: NextFunction) => {
  try {
    User.find()
      .then((users) => {
        if (!users) {
          throw new NotFoundError('Пользователи не найдены');
        }
        res.json({
          status: 'success',
          users,
        });
      })
      .catch((error) => next(error));
  } catch (err) {
    next(error);
  }
};

export const login = (req: Request, res: Response, next: NextFunction) => {};
export const logout = (req: Request, res: Response, next: NextFunction) => {};
export const refresh = (req: Request, res: Response, next: NextFunction) => {};
