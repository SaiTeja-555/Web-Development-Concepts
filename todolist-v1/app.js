//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static("public"));

var items = ["eat","drink","sleep"];
var workItems = [];

app.get("/",(req,res) => {
	

	res.render("list", {items:items,title:date.getDate()} );
});

app.post("/",(req,res) => {
	const item = req.body.itemName;
	const type = req.body.button;
	if(type == "Work") {
		workItems.push(item); 
		res.redirect("/work");
	}
	else {
		items.push(item); 
		res.redirect("/");
	}

});

app.get("/work",(req,res) => {
	res.render("list", {items:workItems,title:"Work List"} );
});

app.listen(3000,() => {
	console.log("Server is running on port 3000...");
});