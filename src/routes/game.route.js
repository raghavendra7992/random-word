const express = require("express");
const Game = require("../model/game.model");
const randomWords = require("random-words");

const app = express.Router();

app.get("/", (req, res) => {
  try {
    let word = randomWords();
    res.send(word);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.post("/", async (req, res) => {
  try {
    let score = await Game.create({ ...req.body });
    res.send(score);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

module.exports = app;