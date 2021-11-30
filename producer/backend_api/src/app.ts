require('dotenv').config();
const express = require('express');
import services from './services'

import { Router, Request, Response } from 'express';

const port = process.env.PORT || 3000;

const app = express();
const route = Router();


app.use(express.json());
route.get('/', async(req: Request, res: Response) => {
  const teste=await services();
  
  res.json({ message:teste })
});

app.use(route);


app.listen(port, () => 'server running on port 3333');
