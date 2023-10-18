const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Now I can open the nodejs");
});

app.listen(3000, () => {
  console.log("listening port from 3000");
});
