const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "public", "/index.html"));
});

// 404 page
app.get("*", function (req, res) {
	res.sendFile(path.join(__dirname, "public", "/404.html"));
});

const port = process.env.PORT || 8080;

app.listen(port, function () {
	console.log(`Server listening on port ${port}!`);
});
