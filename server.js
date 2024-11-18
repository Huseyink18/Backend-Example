import express from 'express';
import 'dotenv/config';

const app = express();

const PORT = process.env.SECRET_EXAMPLE_PORT || 3000;
const KEY = process.env.SECRET_EXAMPLE_KEY;

app.get('/', (req, res) => {
    res.send(`Hallo vom Backend-Server! Key: ${KEY}`);
    }   );

app.listen(PORT, () => {
    console.log(`Key: ${KEY} \n Server is running on port ${PORT}`);
    });