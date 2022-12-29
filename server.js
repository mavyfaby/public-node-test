const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.type("application/json").status(200).send("Node.js + Express Server Test by Mavyfaby");
});

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
