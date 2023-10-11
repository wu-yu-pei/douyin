import { Sequelize } from 'sequelize';
import Redis from 'ioredis';
import config from '../../config';

console.log(`|-> load db: mysql ${config.mysqlConfig.host}`);
console.log(`|-> load db: redis ${config.redisConfig.host}`);

const sequelize = new Sequelize(config.mysqlConfig);
const redis: Redis = new Redis(config.redisConfig);

export { sequelize, redis };
