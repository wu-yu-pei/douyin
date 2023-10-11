import _ from 'lodash';
import defaultConfig from './default';

// pro 环境下 开启定时任务
Object.keys(defaultConfig.scheduler).forEach((key) => {
  defaultConfig.scheduler[key].enable = true;
});

const proConfig: any = {
  env: 'pro',
  port: 3333,
  enableReplay: false,
  secret: 'WUYUPEI',
  mysqlConfig: {
    host: '8.219.66.21',
    port: 3306,
    username: 'root',
    password: '123456',
    database: 'douyin',
    dialect: 'mysql',
    logging: false,
  },
  redisConfig: {
    port: 6379,
    host: '8.219.66.21',
    password: '19781209Wyp',
    db: 2,
  },
};

_.merge(proConfig, defaultConfig);

export default proConfig;
