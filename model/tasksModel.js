const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tasksSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

const TASKS = mongoose.model("singleTask", tasksSchema);

module.exports = TASKS;
