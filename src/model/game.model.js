const { Schema, model } = require("mongoose");

const scoreSchema = new Schema({
  score: { type: Number },
  scored_by: { type: Schema.Types.ObjectId, ref: "user-game" },
});

const Score = model("random-word", scoreSchema);

module.exports = Score;