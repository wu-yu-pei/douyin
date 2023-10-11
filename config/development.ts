import _ from 'lodash';
import defaultConfig from './default';

const devConfig: any = {
  env: 'dev',
  port: 8888,
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
    db: 2,
  },
};

_.merge(devConfig, defaultConfig);
export default devConfig;
