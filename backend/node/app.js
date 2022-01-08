const express = require('express');
const path = require('path');

// Init app
const app = express();
const port = 3000;

// Set Public Folder
app.use(express.static(path.join(__dirname, '/static')));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'))
});


// Start server
app.listen(port, function() {
	console.log(`Service started on port ${port}...`);
});
