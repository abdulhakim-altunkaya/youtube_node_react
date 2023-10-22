const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.get("/randomroute", (req, res) => {
  res.json({mymessage: "hey hey"});
})

app.listen(5000, () => {
  console.log("server is running: ", 5000);
})