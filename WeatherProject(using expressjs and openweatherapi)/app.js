const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res) {
	res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res) {
	const query = req.body.cityName;
	const apiKey = "d45b0e0b03715751a603db38198cd829";
	const url = "https://api.openweathermap.org/data/2.5/weather?appid="+apiKey+"&q="+query;
	https.get(url, (response) => {
		console.log(response.statusCode)
		response.on("data", (data) => {
			const weatherData = JSON.parse(data);
			// console.log(weatherData);
			const temp = weatherData.main.temp;
			const disc = weatherData.weather[0].description;
			const icon = weatherData.weather[0].icon;
			const imageUrl = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
			// console.log("Temperature: "+temp+"K");
			res.write("<h1>The Temperature in "+query+" is "+temp+"K</h1>")
			res.write("<h3>The weather is currently "+disc);
			res.write("<img src="+imageUrl+">")
			res.send()
		}); 

	});
});

app.listen(3000, function() {
	console.log("Server is running on 3000...")
})