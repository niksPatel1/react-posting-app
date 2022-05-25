import mongoose from "mongoose";

const postschema = mongoose.Schema({
    name:String,
    date: {
        type: String,
        default: new Date()
    },
    message: String,
    filename : String
})

const Post = mongoose.model("post",postschema)
export default Post;