import { registration, getUsers, login, refresh, logout } from '../controllers/users';
import { Router } from 'express';

const usersRouter = Router();

usersRouter.post('/users/registration', registration);
usersRouter.post('/users/login', login);
usersRouter.post('/users/logout', logout);
usersRouter.get('/users', getUsers);
export default usersRouter;
