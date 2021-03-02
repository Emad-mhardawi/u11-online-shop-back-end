import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import shopRouter from './routes/shopRoute.js'
dotenv.config();
connectDb()

const app = express();
app.use(shopRouter);
app.use('/' ,(req, res,next)=>{
    res.send('wooorking')
})




app.listen(5000)