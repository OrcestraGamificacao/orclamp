import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  res.send('koé Orc!!!');
});

export default routes;
