import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import posrRotes from './routes/post.js';
import authlogin from './routes/auth.js';
const app = express();

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
require("dotenv").config();
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', posrRotes);
app.use('/user', authlogin);

const CONNECTION_URL = 'mongodb+srv://sa:1234567890@cluster0.krqbj.mongodb.net/<dbname>?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{ useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(PORT,()=>console.log(`serr : ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);

