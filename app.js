var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/html/ethereum.html");
});

app.get("/arbitrum", function (req, res) {
  res.sendFile(__dirname + "/public/html/arbitrum.html");
});

app.get("/ethereum", function (req, res) {
  res.sendFile(__dirname + "/public/html/ethereum.html");
});

app.listen(6500, () => {
  console.log(`HDWallet app listening at 6500`);
});