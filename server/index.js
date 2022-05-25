import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRouter from "./routes/posts.js";
import dotenv from "dotenv";
const config1 = dotenv.config();

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const connectionurl = "mongodb+srv://socialapp:"+process.env.PASSWORD+"@cluster0.xttu2.mongodb.net/example1"
const PORT = process.env.PORT || 5000;


mongoose.connect(connectionurl)
.then(()=>{
    console.log("database connected");
    app.listen(PORT,  ()=> console.log("server is running at port 5000"))
})
.catch()

app.use("/posts", postRouter); 

