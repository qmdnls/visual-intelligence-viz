var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var jf = require('jsonfile'); //jsonfile module
var fs = require('fs'); //require file system
JSON_LOCATION = 'sample.json'

EventEmitter = require('events').EventEmitter;
jsonWatcher = new EventEmitter();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });;

io.on('connection', (socket) => {
    console.log('Client connected.');
    
    // Send initial status
    jf.readFile(JSON_LOCATION, function(err, data) {
        io.emit('jsonUpdate', data);
    });

    jsonWatcher.on('update', function(jsonData) {
        console.log('Status update:', jsonData);
        io.emit('jsonUpdate', jsonData);
    });
});

// Look for changes in the file
fs.watch(JSON_LOCATION, function(event, fileName) {
    jf.readFile(JSON_LOCATION, function(err, data) { // upon change re-read the json file for updated status
        jsonWatcher.emit('update', data)
    });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});