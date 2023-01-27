
const express = require("express");
const app = express.Router();
const User = require("../model/user.model");
app.post("/", async (req, res) => {
  const { name, diff } = req.body;
  try {
    let user = await User.create({ name, diff });
    res.json({ message: "success", response: user });
  } catch (e) {
    res.status(500).json({ message: "error", response: e.message });
  }
});
app.get("/ranking", async (req, res) => {
  try {
    let user = await User.find({});
    user = user.sort((a, b) => b.score - a.score);
    res.json({ message: "success", response: user });
  } catch (e) {
    res.status(500).json({ message: "error", response: e.message });
  }
});
app.put("/users/update/:id", async (req, res) => {
  let {id}=req.params;
  let updatedData=req.body;
  try {
    let user=await User.updateOne({_id:id},{$set:updatedData});

    res.json({ message: "success", response: user });
  } catch (e) {
    res.status(500).send({ message: "error", response: e.message });
  }
});
module.exports = app;
