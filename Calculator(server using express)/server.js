//jshint esversion:6

const express = require("express");
const app = express();
app.get("/",function(request,response) {
	// console.log(request);
	response.send("<h1>Hello</h1>");
});

app.get("/contact",function(req,res) {
	// console.log(request);
	res.send("<h1>Contact me at: saiteja@gmail.com</h1>");
});

app.get("/about",function(req,res) {
	// console.log(request);
	res.send("<h1>I am Sai Teja</h1>");
});


app.listen(3000, function() {
	console.log("Server has started on port 3000...");
});
//sa