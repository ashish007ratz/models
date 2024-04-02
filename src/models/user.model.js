import mongoose,{Schema} from "mongoose";

import Jwt  from "jsonwebtoken";
import bcrypt from "bcrypt";


const userSchema = new Schema(
    {
    userName:{
        type: String,
        required: true,
        index:true,
        trim: true,
        lowercase: true,
    },
    email:{
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    fullName:{
        type: String,
        required: true,
        index:true,
        trim: true,
    },

    avatar:{
        type: String,//cloudinary url free 
        required: true,
    },

    coverImage:{
        type: String,//cloudinary url free 
        required: false, 
    },

    password:{
        type: String,
        required: [true,"Password is required"],
    },

    refreshToken:{
        type: String,
        required: true,
    },

    watchHistory:[{
        type: Schema.Types.ObjectId,
        ref: "Video",
    }],
    },
    {
        timestamps: true
    }
);


userSchema.methods.generateAccessToken =  function(){
    return Jwt.sign({
        _id:this._id,
        email: this.email, 
        userName: this.userName,
        fullName: this.fullName,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
    
);
}

userSchema.methods.generateRefreshToken =  function(){
    return  Jwt.sign({
        _id:this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
    
);
}

userSchema.pre("save",async function (next){ 
    if(this.isModified("password")) 
    this.password = bcrypt.hash(this.password, 10);
    next();
});

userSchema.methods.isPasswordCorrect = async function
(password){          return await bcrypt.compare(password, this.password);
}

export const User = mongoose.model("User", userSchema);