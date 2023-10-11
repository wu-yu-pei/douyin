import { Request, Response } from 'express';
import douyinService from './douyin.service';

class DouyinController {
  async douyinHi(req: Request, res: Response) {
    const result = await douyinService.douyinHi();
    res.send(result);
  }

  async startTask(req: Request, res: Response) {
    const { roomid } = req.params;
    const result = await douyinService.startTask(roomid);
    res.send(result);
  }

  async infoTask(req: Request, res: Response) {
    const { roomid } = req.params;
    const result = await douyinService.infoTask(roomid);
    res.send(result);
  }

  async stopTask(req: Request, res: Response) {
    const { roomid } = req.params;
    const result = await douyinService.stopTask(roomid);
    res.send(result);
  }

  async data(req: Request, res: Response) {
    const { roomid } = req.params;
    const result = await douyinService.data(roomid);
    res.send(result);
  }

  async pushZanData(req: Request, res: Response) {
    console.log(req);
    res.status(200).send({ msg: 'success' });
  }
}

export default new DouyinController();
