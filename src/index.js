// require('dotenv').config({path:'./env'});

import mongoose from 'mongoose';
import { DB_NAME, serverIp, serverPort } from './constants.js';
import connectDb from './db/index.js';
import dotenv from "dotenv";
import app from './app.js' 

dotenv.config({
    path: './env'
})

connectDb()
.then((value)=>{
    // connecting to servrer
    app.listen(serverPort,serverIp);
    console.log(`server is Running at port: ${serverIp}:${serverPort}`); 
})
.catch((error)=>{
    console.log("Error connecting DataBase:=:",error);
});