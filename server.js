import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
dotenv.config();
connectDb()

const app = express();

app.use('/' ,(req, res,next)=>{
    res.send('wooorking')
})


app.listen(5000)