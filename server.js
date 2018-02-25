var express = require('express');
var app = express();

var player = require('./app/game/Player');

var port = (process.env.PORT || 5001);
var clients = []; 

app.set('port', port);
app.use(express.static('dist'));

var server = app.listen(port, function() {
  console.log('App is running on localhost: ' + port);
});

var io = require('socket.io').listen(server);


io.on('connection', function(socket) {
  console.log(socket.id, clients.length);

  clients.push(socket);
  var AlertToDisplay = clients.indexOf(socket);
  socket.emit('PlayerConnected', AlertToDisplay);

  socket.on ('playerControl', function (data) {
    console.log(data);
    player.move(data.direction);
  });

  socket.once('disconnect', function() {
    var socketIndex = clients.indexOf(socket);
    clients.splice(clients.indexOf(socket), 1);
    UpdatePlayers(io);
  });
});

function UpdatePlayers(io) {
  clients.forEach(function(socket, index) {
    AlertToDisplay = index;
    socket.emit('PlayerConnected', AlertToDisplay);
  });
}
