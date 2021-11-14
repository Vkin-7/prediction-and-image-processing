require('dotenv').config();
const express = require('express');

import { Router, Request, Response } from 'express';

const port = process.env.PORT || 3000;

const app = express();
const route = Router();
app.use(express.json());

route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello world with Typescript' })
});

app.use(route);

app.listen(port, () => 'server running on port 3333');
