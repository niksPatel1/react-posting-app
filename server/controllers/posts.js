import Post from "../models/post.js";
export const sendpost = async (req, res) => {
  const newpost = new Post({
    name: req.body.name,
    message: req.body.message,
    filename: req.body.filename,
  });
  await newpost.save();
  res.send("all done");
  console.log("sendpost");
};

export const updatepost = async (req, res) => {
  const updated = {
    name: req.body.name,
    message: req.body.message,
    filename: req.body.filename,
  }
  Post.findOneAndUpdate({ _id: req.body._id },updated , (err,res)=>{
  });
  res.send("updated");
};

export const getpost = async (req, res) => {
  Post.find({}, (err, Response) => {
    res.send(Response);
    console.log("getposts");
  });
};

export const findpost = async (req, res) => {
  Post.find({ _id: req.body.id }, (err, Response) => {
    res.send(Response);
    console.log("findpost");
  });
};

export const deletefile = async (req,res)=>{
  console.log(req.body.id);
  Post.findOneAndDelete({_id:req.body.id}, (err,res)=>{
  })
  res.send("deleted done")
}
