const mongoose = require("mongoose");
const schema = mongoose.Schema;

const participantSchema = new schema({
  id_suggestion: String,
  title_suggestion: String,
  id_traveler: String,
  name_traveler: String,
});

const Participant = mongoose.model("participant", participantSchema);
module.exports = Participant;
