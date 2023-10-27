import scheduler from 'node-schedule';

const config = {
  NAME: 'updateMysqlNewsCoinsFromRedis',
  TIME: '10 * * * * *',
};

scheduler.scheduleJob(config.NAME, config.TIME, async () => {
  console.log('scheduler start: updateMysqlNewsCoinsFromRedis');
});
