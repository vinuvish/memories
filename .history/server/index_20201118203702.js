import express from 'express';
import bodyParser from 'body-parser'
import mongoos from 'mongoose'
import cors from 'cors';

const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true }));