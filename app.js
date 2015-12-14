var express = require('express');
var app = express();
var glob = require("glob")
var fs = require("fs")
 
var port_number = 3000;
var pages = "pages";
var ext = ".html";

// Get the css, js, image for specific "name" page
app.get('/:name/:file', function (req, res) {  
	var file = pages+"/"+req.params.name+"/"+req.params.file;
	if (!fs.existsSync(file)) {
	  	res.send("");
	  	return;
	}
	res.sendFile(file, { root: __dirname });
});

// Load a specific "name" page
app.get('/:name', function (req, res) {
	var file = pages+"/"+req.params.name+ext
	if (!fs.existsSync(file)) {
	  	res.send(index());
	  	return;
	}
	res.sendFile(file, { root: __dirname });
});

// Default page
app.use(function(req, res){
	res.send(index());
});

function index() { 
	var files = glob.sync(pages+"/*"+ext, {}); 
	var html = "<ul>";
	var name;
	for (var i = 0 ; i < files.length ; i++) {
		name = files[i].substring(6, files[i].length - 5);
		html += "<li><a href=\""+name+"\">"+name+"</a></li>";
	}
	html += "</ul>"; 
	return html;
}

var server = app.listen(port_number, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});