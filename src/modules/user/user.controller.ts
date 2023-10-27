import { Request, Response } from 'express';
import userService from './user.service';

class UserController {
  async login(req, res) {
    const { phone, password } = req.body;
    const result = await userService.login(phone, password);
    console.log(result);
    
    res.send({ code: 200, msg: result });
  }
}

export default new UserController();
