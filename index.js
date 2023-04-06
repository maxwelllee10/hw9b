const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/api/countries", function(req, res) {
	res.send("Visited countries API called successfully!");
});

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/views/index.html");
});

app.listen(3000, function() {
	console.log("Server listening on port 3000...");
});

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

let articles = [
	{ id: 1, title: "First article", content: "This is my first article" },
	{ id: 2, title: "Second article", content: "This is my second article" },
	{ id: 3, title: "Third article", content: "This is my third article" }
];

app.post("/articles", function(req, res) {
	const newArticle = {
		id: Math.max(...articles.map(a => a.id)) + 1,
		title: req.body.title,
		content: req.body.content
	};
	
	articles.push(newArticle);
	
	res.send(`New article added with ID ${newArticle.id} and title "${newArticle.title}"`);
});

app.get("/articles", function(req, res) {
	res.send(articles);
});

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/views/index.html");
});

app.listen(3000, function() {
	console.log("Server listening on port 3000...");
});






