const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: { type: String },
    diff: {type:String,enum:['High',"Medium","Low"]},
    score:{type:Number,default:0},
  },
  {
    timestamps: true
  }
);

const User = model("user-games", userSchema);

module.exports = User;