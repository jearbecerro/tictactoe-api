import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import { load } from 'ts-dotenv';
import mongoose from 'mongoose';

import router from './router';
//set env
const env = load({
    MONGO_URL: String,
});

const app = express();

app.use(cors({
  credentials: true,
}));

app.use(compression());
app.use(cookieParser()); 
app.use(bodyParser.json());
 

app.listen(8080, () => {
  console.log('Server running on http://localhost:8080/');
});

const MONGO_URL: string = env.MONGO_URL;

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
const db = mongoose.connection;
db.on('error', (error) => console.error(error.message))
db.once('open', (r) => console.log('Connected to NOSQL Database'))

app.use('/api/v1', router());