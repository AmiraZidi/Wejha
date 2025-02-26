const express = require("express");
const Participant = require("../models/participant");
const participantRouter = express.Router();

//add participant
participantRouter.post("/add", async (req, res) => {
  try {
    let newparticipant = new Participant(req.body);
    let result = await newparticipant.save();
    res.send({ participant: result, msg: "participant is added" });
  } catch (error) {
    console.log(error);
  }
});

//get participant

participantRouter.get("/", async (req, res) => {
  try {
    let result = await Participant.find();
    res.send({ participants: result, msg: "all participants" });
  } catch (error) {
    console.log(error);
  }
});

//delete participant

participantRouter.delete("/:id", async (req, res) => {
  try {
    let result = await Participant.findByIdAndDelete(req.params.id);
    res.send({ msg: "participant is deleted" });
  } catch (error) {
    console.log(error);
  }
});

//update participant

participantRouter.put("/:id", async (req, res) => {
  try {
    let result = await Participant.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ msg: "participant is updated" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = participantRouter;
