import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

export {app};

const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,

}));

/// using it for limit and accepting json
app.use(express.json({limit:"16kb"}));

/// for url data encoder extended for data inside data
app.use(express.urlencoded({extended:true,limit:"16kb"}));

/// staticc
app.use(express.static("public"));

/// stores cookies in user brower 
app.use(cookieParser());