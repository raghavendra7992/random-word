const express = require("express");
const User = require("../model/user.model");

const app = express.Router();

app.post("/", async (req, res) => {
  console.log(req.body);
  try {
    let user = await User.create({ ...req.body });
    res.send(user);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
app.get("/:id", async (req, res) => {
  try {
    let user = await User.findOne({ _id: req.params.id });
    res.send(user);
  } catch (e) {
    res.status(403).send(e.message);
  }
});

module.exports = app;