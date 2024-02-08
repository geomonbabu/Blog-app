const mongoose=require("mongoose")

const BlogSchema = new mongoose.Schema(
    {
        username:String,
        email:String,
        image:String,
        description:String
    }
)
module.exports=mongoose.model("blog",BlogSchema)