import path from "path";
import express from "express";

const app = express();
// Express middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(express.static("public"));
const __dirname = path.resolve();
console.log("__dirname=>", __dirname)
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  // res.sendFile(__dirname + "/public/html/ethereum.html");
  // res.sendFile('index.html', {root: path.join(__dirname, 'public')});
  res.sendFile(path.resolve(__dirname, "public", "html" , "ethereum.html"))
});

app.get("/arbitrum", function (req, res) {
  // res.sendFile(__dirname + "/public/html/arbitrum.html");
  res.sendFile(path.resolve(__dirname, "public", "html" , "arbitrum.html"))
});

app.get("/ethereum", function (req, res) {
  // res.sendFile(__dirname + "/public/html/ethereum.html");
  res.sendFile(path.resolve(__dirname, "public", "html" , "ethereum.html"))
});

app.listen(6500, () => {
  console.log(`HDWallet app listening at 6500`);
});

module.exports = app
