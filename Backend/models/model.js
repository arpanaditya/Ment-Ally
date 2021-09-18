const mongoose = require("mongoose");
const hackathonSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "please add a name"],
  },

  description: {
    type: String,
    required: [true, "please add a description"],
  },
  url: {
    type: String,
    required: [true, "please add pic url"],
  },
});
module.exports = mongoose.model("hackathon", hackathonSchema);
