import path from 'path';
import pkg from '../package.json';
export default {
  systemInfo: {
    projectName: pkg.name,
    version: pkg.version,
  },
  secret_key: 'secretKey_4570909',
  paths: {
    rootPath: path.resolve(__dirname, '../'),
    srcPath: path.resolve(__dirname, '../src'),
    staticPath: path.resolve(__dirname, '../static'),
    imagePath: path.resolve(__dirname, '../static/images'),
  },
  scheduler: {
    updateCoinsToMysqlFromRedis: {
      time: '10 * * * * *',
      enable: false,
    },
    updateViewsToMysqlFromRedis: {
      time: '10 * * * * *',
      enable: false,
    },
  },
};
