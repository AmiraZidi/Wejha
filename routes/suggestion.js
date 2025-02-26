const express = require("express");
const Suggestion = require("../models/suggestion");
const suggestionRouter = express.Router();


suggestionRouter.post("/add", async (req, res) => {
  try {
    let newsuggestion = new Suggestion(req.body);
    let result = await newsuggestion.save();
    res.send({ suggestion: result, msg: "suggestion is added" });
  } catch (error) {
    console.log(error);
  }
});

suggestionRouter.get("/", async (req, res) => {
  try {
    let result = await Suggestion.find();
    res.send({ suggestions: result, msg: "all suggestions" });
  } catch (error) {
    console.log(error);
  }
});

//delete suggestion

suggestionRouter.delete("/:id", async (req, res) => {
  try {
    let result = await Suggestion.findByIdAndDelete(req.params.id);
    res.send({ msg: "suggestion is deleted" });
  } catch (error) {
    console.log(error);
  }
});

//update suggestion

suggestionRouter.put("/:id", async (req, res) => {
  try {
    let result = await Suggestion.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ msg: "suggestion is updated" });
  } catch (error) {
    console.log(error);
  }
});


module.exports = suggestionRouter;
