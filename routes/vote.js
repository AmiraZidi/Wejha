const express = require("express");
const Vote = require("../models/vote");
const voteRouter = express.Router();


voteRouter.post("/add", async (req, res) => {
  try {
    let newvote = new Vote(req.body);
    let result = await newvote.save();
    res.send({ vote: result, msg: "vote is added" });
  } catch (error) {
    console.log(error);
  }
});

voteRouter.get("/", async (req, res) => {
  try {
    let result = await Vote.find();
    res.send({ votes: result, msg: "all votes" });
  } catch (error) {
    console.log(error);
  }
});

//delete vote

voteRouter.delete("/:id", async (req, res) => {
  try {
    let result = await Vote.findByIdAndDelete(req.params.id);
    res.send({ msg: "vote is deleted" });
  } catch (error) {
    console.log(error);
  }
});

//update vote

voteRouter.put("/:id", async (req, res) => {
  try {
    let result = await vote.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ msg: "vote is updated" });
  } catch (error) {
    console.log(error);
  }
});


module.exports = voteRouter;
