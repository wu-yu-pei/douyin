import scheduler from 'node-schedule';

const config = {
  NAME: 'updateMysqlNewsViewsFromRedis',
  TIME: '10 * * * * *',
};

scheduler.scheduleJob(config.NAME, config.TIME, async () => {
  console.log('scheduler start: updateMysqlNewsViewsFromRedis');
});
