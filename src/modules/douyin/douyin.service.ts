import axios from 'axios';
import { redis } from '../../database';
const APP_SECRET = '9e8884e90e6352a6df1875ab47ff5d6ecec53644'; // 评论吧
const APP_ID = 'ttd650a0ed496327d310';
const GRANT_TYPE = 'client_credential';

class DouYinService {
  async douyinHi() {
    return 'hi';
  }

  async startTask(roomid) {
    const accessToken = await getAccessToken();
    const task_id = await taskStart(accessToken, APP_ID, roomid, '3');
    return task_id || 'null';
  }

  async infoTask(roomid) {
    const accessToken = await getAccessToken();
    const info = await taskInfo(accessToken, APP_ID, roomid, '3');
    return info || 'null';
  }

  async stopTask(roomid) {
    const accessToken = await getAccessToken();
    const info = await taskStop(accessToken, APP_ID, roomid, '3');
    return info || 'null';
  }

  async data(roomid) {
    return '这是push的数据';
  }
}

export default new DouYinService();

// douyin apis
const AsccessTokenApi = 'https://developer.toutiao.com/api/apps/v2/token';
const taskStartApi = 'https://webcast.bytedance.com/api/live_data/task/start';
const taskStopApi = 'https://webcast.bytedance.com/api/live_data/task/stop';
const taskInfoApi = 'https://webcast.bytedance.com/api/live_data/task/get';
// 1. 获取 token
async function getAccessToken() {
  if (await redis.get('access_token')) {
    console.log('from redis: access_token');
    return redis.get('access_token');
  }

  const {
    data: {
      data: { access_token, expires_in },
    },
  } = await axios.post(AsccessTokenApi, {
    appid: APP_ID,
    secret: APP_SECRET,
    grant_type: GRANT_TYPE,
  });

  redis.set('access_token', access_token, 'EX', expires_in);

  return access_token;
}

// 2. 启动任务
async function taskStart(access_token: string, appid: string, roomid: string, msg_type: string) {
  const data = await axios.post(
    taskStartApi,
    {
      roomid,
      appid,
      msg_type,
    },
    {
      headers: {
        'access-token': access_token,
        'content-type': 'application/json',
      },
    }
  );
  return data.data.task_id;
}

// 3.0 停止任务
async function taskStop(access_token: string, appid: string, roomid: string, msg_type: string) {
  const data = await axios.post(
    taskStopApi,
    {
      roomid,
      appid,
      msg_type,
    },
    {
      headers: {
        'access-token': access_token,
        'content-type': 'application/json',
      },
    }
  );
  return data.data;
}

// 3.0 任务状态
async function taskInfo(access_token: string, appid: string, roomid: string, msg_type: string) {
  const data = await axios.get(taskInfoApi, {
    params: {
      roomid,
      appid,
      msg_type,
    },
    headers: {
      'access-token': access_token,
      'content-type': 'application/json',
    },
  });
  return data.data;
}
