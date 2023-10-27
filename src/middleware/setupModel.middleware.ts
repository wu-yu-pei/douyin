import { globSync } from 'glob';
import config from '../../config';
import path from 'path';

export default async function () {
  const modelFile = globSync('src/modules/**/*.model.ts');
  const models: any = {};

  //1.加载所有 model
  for (let i = 0; i < modelFile.length; i++) {
    const _path = path.resolve(path.join(__dirname, '../../'), modelFile[i]);

    let { default: model } = await import(_path);

    models[model.name] = model;

    console.log(`|-> load model: ${_path}`);
  }
}
