import { Router } from 'express';
import userController from './book.controller';

const userRoute = Router();

userRoute.get('/book', userController.list);

userRoute.get('/book/:book_id', userController.findById);

userRoute.get('/book/:book_id/:article_id', userController.findArticleById);

export default userRoute;
