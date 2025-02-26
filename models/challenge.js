const mongoose = require("mongoose");
const schema = mongoose.Schema;

const challengeSchema = new schema({
  id_suggestion: String,
  title_suggestion: String,
  id_agency: String,
  name_agency: String,
  Program: {
    type: String,
    default: "",
  },
  budget: {
    type: String,
    default: "0",
  },
});

const Challenge = mongoose.model("challenge", challengeSchema);
module.exports = Challenge;
