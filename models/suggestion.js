const mongoose = require("mongoose");
const schema = mongoose.Schema;

const suggestionSchema = new schema({
  id_voyageur: String,
  name_voyageur: String,
  destination: String,
  Title: String,
  date: String,
  budget: String,
  duree: Number,
  description: String,
  img: String,
  status: {
    type: String,
    default: "Pending",
  },
  winner: {
    type: String,
    default: "",
  },
});

const Suggestion = mongoose.model("Suggestion", suggestionSchema);
module.exports = Suggestion;
