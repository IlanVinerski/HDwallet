var express = require("express");
var path = require("path");
var app = express();

// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res){
	res.sendFile(__dirname + "/public/html/ethereum.html");
})

app.get("/arbitrum", function(req, res){
	res.sendFile(__dirname + "/public/html/arbitrum.html");
})

// app.get("/index3", function(req, res){
// 	res.sendFile(__dirname + "/public/html/index3.html");
// })

app.get("/ethereum", function(req, res){
	res.sendFile(__dirname + "/public/html/ethereum.html");
})


app.listen(6500, () => {
	console.log(`HDWallet app listening at 6500`);
})
// app.listen(8080);