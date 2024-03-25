import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDb= async()=>{

    try{
    var connectionIsntance = await    mongoose.connect(`${process.env.MONGODI_URI}`)
        console.log(`\nMONGODB connected!! DB host: ${connectionIsntance.connection.host}`)
    }   
    catch(error){
        console.log("MongoDb connection error:= ", error)
        process.exit(1);
    }
}

export default connectDb;