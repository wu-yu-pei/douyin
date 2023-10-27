import { Router } from 'express';
import userController from './user.controller';

const userRoute = Router();

userRoute.post('/book/login', userController.login);

export default userRoute;
