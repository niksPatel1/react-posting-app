import express from "express";
import { findpost, getpost, sendpost, updatepost, deletefile } from "../controllers/posts.js";
import Post from "../models/post.js";

const router = express.Router();

router.get("/", getpost);
router.post("/sendpost", sendpost);
router.post("/findpost", findpost);
router.post("/updatepost", updatepost);
router.post("/deletefile",deletefile)

export default router;
