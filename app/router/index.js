import rootRouter from '../modules/root';
import config from '../configs';

const BASE_URL = config.BASE_URL;

export default (app) => {
  app.use(`${BASE_URL}`, rootRouter);
};
