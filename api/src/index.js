import express from 'express';
// eslint-disable-next-line
import mongoose from 'mongoose';
import cors from 'cors';

import routes from './routes';

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(3333);
