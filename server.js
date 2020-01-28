var express = require('express');
var app = express();
var server = app.listen(3000);
var io = require('socket.io')(server);

app.get('/', function (req, res) {
    res.redirect('index.html');
});
app.use(express.static('public')); 

console.log("My server is running")

io.sockets.on('connection', newConnection);

function newConnection(socket){
    console.log('new connection: ' + socket.id);

    socket.on('mouse', mouseMessage);

    function mouseMessage(data){
        io.sockets.emit('mouse', data);
        console.log(data);
    }
}









// var io = require('socket.io')(server);
// var messages = [];


// app.get('/', function (req, res) {
//    res.redirect('index.html');
// });
// server.listen(3000);
// io.on('connection', function (socket) {
//     for(var i in messages) {
//       io.sockets.emit("display message", messages[i]);
//     }
//     socket.on("draw", function  newDrawing (data) {
//         console.log(data);
//         messages.push(data);
//         io.sockets.emit("display message", data);
//     });
//  });

 