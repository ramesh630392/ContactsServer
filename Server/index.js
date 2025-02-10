import express, { request, response } from 'express';
import dotenv from 'dotenv';


const app = express();
dotenv.config();
app.use(express.json());


app.get('/', (request, response)=>{
    response.status(200).json({message: "Hello world"});
});

app.listen(3000, ()=>{
    console.log("server Running at port 3000");
});