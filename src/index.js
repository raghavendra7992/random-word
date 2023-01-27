const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/db");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/users", require("./routes/user.routes"));
app.use("/games", require("./routes/game.route"));

app.get("/", (req, res) => {
  res.send("Random-word");
});

app.listen(PORT, async () => {
  await dbConnect();
  console.log(`server started at http://localhost:${PORT}`);
});