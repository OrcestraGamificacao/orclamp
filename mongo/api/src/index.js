import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes';

mongoose.connect(
  'mongodb+srv://orc:orc666@codecamp-08gxr.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(3333);
