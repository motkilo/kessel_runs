const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const runSchema = new Schema({
  id: {type: String, required: true},
  title: { type: String, required: true },
  userID: { type: String, required: true},
  coordinates_start: [],
  coordinates_finish: [],
  start_city: String,
  end_city: String,
  run_time: String,
  distance: String,
  date: { type: Date, defaul: Date.now}
});

const Run = mongoose.model("Run", runSchema);

module.exports = Run;