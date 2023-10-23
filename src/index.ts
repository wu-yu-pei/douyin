import express, { Application } from 'express';
import setupMiddleware from './middleware/index';
import config from '../config/index';
import DefaultLog from '../src/common/utils/logInfo';

async function bootstrap() {
  const app: Application = express();

  await setupMiddleware(app);

  app.listen(config.port, () => {
    new DefaultLog({
      name: config.systemInfo.projectName,
      version: config.systemInfo.version,
      port: config.port,
      env: config.env,
    });
  });
}

bootstrap();
