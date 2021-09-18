const express = require("express");
const hackathon = require("../models/model");
const router = express.Router();

//get
router.get("/", async (req, res) => {
  try {
    const posts = await hackathon.find();
    res.json(posts);
  } catch (error) {
    res.json({ message: error });
  }
});
//post
//We can't share the Api key
router.post(`/post/${process.env.HiddenKey}`, async (req, res) => {
  const { title, description, url } = req.body;
  try {
    const post = new hackathon({
      title,
      description,
      url,
    });
    await post.save();
    res.json({
      success:true,
      message:"posted"
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});
// get single post
router.get(`/${process.env.HiddenKey}/:postId`, async (req, res) => {
  try {
    const post = await hackathon.findById(req.params.postId);
    res.json(post);
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
});

//delete a post
router.delete(`/${process.env.HiddenKey}/:postId`, async (req, res) => {
  try {
    const removedPost = await hackathon.deleteOne({ _id: req.params.postId });
    res.json(removedPost);
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
});

//update a post
router.patch(`/${process.env.HiddenKey}/:postId`, async (req, res) => {
  try {
    const updatedPost = await hackathon.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title ,description:req.body.description,url:req.body.url} }
    );
    res.json(updatedPost);
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
