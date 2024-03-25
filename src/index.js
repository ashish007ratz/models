// require('dotenv').config({path:'./env'});

import mongoose from 'mongoose';
import { DB_NAME } from './constants.js';
import connectDb from './db/index.js';
import dotenv from "dotenv";

dotenv.config({
    path: './env'
})

connectDb();