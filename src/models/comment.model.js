import { Timestamp } from "bson";
import mongoose ,{Schema,model} from  "mongoose"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const commentSchema= new Schema(
    { 
      content:{
        type:String,
        required:true,

      },
      video:{
        type: Schema.Types.ObjectId,
        ref:"Vedio"
      },
      owner:{
        type: Schema.Types.ObjectId,
        ref:"User"
      },

    }
, {timestamps:true})
commentSchema.plugin(mongooseAggregatePaginate)
export const Comment = model("Comment",commentSchema)