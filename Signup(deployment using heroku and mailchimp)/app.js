//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=> {
	res.sendFile(__dirname+"/signup.html");
});

app.post("/",(req,res) => {
	const firstName = req.body.fname;
	const lastName = req.body.lname;
	const email = req.body.email;

	const data = {
		members: [
			{
				email_address: email,
				status: "subscribed",
				merge_fields: {
					FNAME: firstName,
					LNAME: lastName
				}
			}
		]
	};

	const jsonData = JSON.stringify(data);

	const url = "https://us5.api.mailchimp.com/3.0/lists/b64968c115";
	const options = {
		method: "POST",
		auth: "saiteja:ecaff7c49e57f579489b2e2eadb98c82-us5"
	}

	const request = https.request(url,options,function(response) {
		
		if (response.statusCode === 200) {
			res.sendFile(__dirname+"/success.html");
		}
		else {
			res.sendFile(__dirname+"/failure.html");
		}

		response.on("data",function(data) {
			console.log(JSON.parse(data));
		});
	});

	request.write(jsonData);
	request.end();
});

app.post("/failure",function() {
	res.redirect("/");
});




app.listen(process.env.PORT || 3000, () => {
	console.log("Server is running on port 3000...");
});

// ecaff7c49e57f579489b2e2eadb98c82-us5
// b64968c115