//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true})); //for parsing the request data


app.get("/", function(req,res) {
	res.sendFile(__dirname + "/index.html");
});

app.post("/",function (req,res) {
	// console.log(req.body);

	var num1 = Number(req.body.num1);
	var num2 = Number(req.body.num2);
	var result = num1 + num2;

	res.send("The result of the calculation is "+ result);
});

app.listen(3000, function() {
	console.log("Server is running on 3000...");
})