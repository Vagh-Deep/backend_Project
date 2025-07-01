import mongoose,{Schema, model} from "mongoose";

const likeSchema = new Schema({
      video:{
        type: Schema.Types.ObjectId,
        ref:"Vedio"
      },
      likedBy:{
        type: Schema.Types.ObjectId,
        ref:"User"
      },
      tweet:{
        type: Schema.Types.ObjectId,
        ref:"Tweet"
      },
      comment:{
        type: Schema.Types.ObjectId,
        ref:"Comment"
      }
},{timestamps:true})

export const Like= model("Like",likeSchema)

