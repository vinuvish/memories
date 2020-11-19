import express from 'express';
import bodyParser from 'body-parser'
import mongoos from 'mongoose'
import cors from 'cors';

const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors())


const CONNECTION_URL = 'mongodb+srv://vinuvish:<password>@cluster0.fh9nn.mongodb.net/<dbname>?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoos.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => { }).catch(() => { })
