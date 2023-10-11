import { NextFunction, Router, Response, Request } from 'express';
import crypto from 'crypto';
import douyinController from './douyin.controller';
import config from '../../../config';
import verifyPipe from '../../pipe/verify.pipe';

const douyinRoute = Router();

douyinRoute.get('/douyin/hi', douyinController.douyinHi);

douyinRoute.get('/douyin/start_task/:roomid', douyinController.startTask);

douyinRoute.get('/douyin/info_task/:roomid', douyinController.infoTask);

douyinRoute.get('/douyin/stop_task/:roomid', douyinController.stopTask);

douyinRoute.get('/douyin/push_zan_data/:roomid', douyinController.data);

// 抖音推送赞的回调
douyinRoute.post('/douyin/pull_zan_data', verifyPipe.verifySign, douyinController.pushZanData);

export default douyinRoute;
