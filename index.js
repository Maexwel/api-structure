import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { ENTRYPOINT_ROUTE } from './src/routes';
require('dotenv').config(); // .env variables

// Base definition
const app = express();
app.use(bodyParser.json({ type: 'application/json' })); // middlewares used
app.use(cors()); // middlewares used
const PORT = process.env.PORT || 1234;

// Routes
app.use(ENTRYPOINT_ROUTE); // /api : Entry point of the app, used to test if the api is running 

app.listen(PORT, () => {
    console.log(`API Running on port ${PORT}`);
});