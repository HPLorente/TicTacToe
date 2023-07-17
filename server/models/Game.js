const mongoose = require("mongoose");
const { Schema } = mongoose;
const moment = require("moment-timezone");

const gameSchema = new Schema({
  player1: String,
  player2: String,
  rounds: Number,
  player1Score: Number,
  player2Score: Number,
  draws: Number,
  date: {
    type: Date,
    default: moment.tz("Asia/Manila").startOf("day").utcOffset(8),
  },
  createdAt: {
    type: Date,
    default: moment.tz("Asia/Manila"),
  },
});

module.exports = mongoose.model("Game", gameSchema);
