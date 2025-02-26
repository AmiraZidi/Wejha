const express = require("express");
const Challenge = require("../models/challenge");
const challengeRouter = express.Router();

//add challenge
challengeRouter.post("/add", async (req, res) => {
  try {
    let newchallenge = new Challenge(req.body);
    let result = await newchallenge.save();
    res.send({ challenge: result, msg: "challenge is added" });
  } catch (error) {
    console.log(error);
  }
});

//get challenge

challengeRouter.get("/", async (req, res) => {
  try {
    let result = await Challenge.find();
    res.send({ challenges: result, msg: "all challenges" });
  } catch (error) {
    console.log(error);
  }
});

//delete challenge

challengeRouter.delete("/:id", async (req, res) => {
  try {
    let result = await Challenge.findByIdAndDelete(req.params.id);
    res.send({ msg: "challenge is deleted" });
  } catch (error) {
    console.log(error);
  }
});

//update challenge

challengeRouter.put("/:id", async (req, res) => {
  try {
    let result = await Challenge.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ msg: "challenge is updated" });
  } catch (error) {
    console.log(error);
  }
});

// challengeRouter.delete("/deleteall", async (req, res) => {
//   try {
//     let result = await Challenge.deleteMany(); // Directly call deleteMany()
//     res.send({
//       msg: "Tous les challenges ont été supprimés",
//       deletedCount: result.deletedCount,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ msg: "Erreur serveur", error });
//   }
// });

module.exports = challengeRouter;
