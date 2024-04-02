import mongoose,{Schema} from "mongoose";

import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videoFile:{
            type: String,// cloundnart url free
            required: true,

        },

        tumbNail:{
            type: String,
            required: true,
        },

        title: {
            type: String,
            required: true,
        },
        
        description: {
            type: String,
        },
        duration: {
            type: Number,
            required: true,
     
        },
        views: {
            type: Number,
            default: true,
        },
        isPublished: {
            type: Boolean,
            default: true,
    
        },
        creator:{
            type: Schema.Types.ObjectId,
            ref: "User"
        }
        
              
    },
    {
        timestamps:true
    });

    videoSchema.plugin(mongooseAggregatePaginate);

export const video = mongoose.model("Video", videoSchema);