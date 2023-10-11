import _ from 'lodash';
import defaultConfig from './default';

const devConfig: any = {
  env: 'dev',
  port: 8888,
  enableReplay: false,
  secret: 'WUYUPEI',
};

_.merge(devConfig, defaultConfig);
export default devConfig;
