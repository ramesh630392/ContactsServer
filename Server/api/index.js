import express from 'express';
import dotenv from 'dotenv';
import serverless from 'serverless-http';

dotenv.config();
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ message: "Hello world" });
});



export default serverless(app);  
