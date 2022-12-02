'use strict';

import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import notFound from './handlers/404';
import serverErr from './handlers/500';
import { clothesRouter, foodRouter } from './routes'

dotenv.config();
export const app: Express = express()

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(clothesRouter);
app.use(foodRouter);

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('We\'re live!!!');
});

app.use('*', notFound);
app.use(serverErr);

export function start() {
  app.listen(PORT, () => console.log('listening on port: ', PORT));
}
