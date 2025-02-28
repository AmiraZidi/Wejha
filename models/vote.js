const mongoose = require("mongoose");
const schema = mongoose.Schema;

const voteSchema = new schema({
  id_suggestion: String,
  title_suggestion: String,
  id_traveler: String,
  name_traveler: String,
  id_agency: String,
  name_agency: String,
});

const Vote = mongoose.model("vote", voteSchema);
module.exports = Vote;
