var express = require("express"); //dlaczego var a nie const?
var bodyParser = require("body-parser");
var fs = require("fs"); //potrzebny do operacji na plikach
var app = express();
var stringifyFile;
app.use(bodyParser.json()); //żeby skorzystać z formatu application/json

app.get("/getNote", function(req, res) {
	fs.readFile("./test.json", "utf8", function(err, data) {
		if (err) throw err;
		stringifyFile = data;
		res.send(data);
	});
});

app.post("/updateNote/:note", function(req, res) {
	fs.writeFile("./test.json", stringifyFile, function(err) {
		if (err) throw err;
		console.log("file updated");
		data = stringifyFile + req.params.note;
		res.send(data);
	});
});

app.listen(3000);
