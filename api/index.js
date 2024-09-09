const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello World"));

app.get("/random", (req, res) => {
  const random = Math.floor(Math.random() * 10) + 1;
  return res.status(200).send("Um numero random entre 1 e 10 ẽ: " + random);
})

app.listen(process.env.API_PORT, () => console.log("Server ready on port " + process.env.API_PORT));

module.exports = app;