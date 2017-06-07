const express = require('express');
// const socket = require('socket.io');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
let port = process.env.PORT || "3000";

// Date variables for chat bot
var d = new Date();
var n = d.getFullYear();


// set static dir
app.use('/public', express.static('public'));

app.set('view engine', 'pug');
app.set('views', __dirname + '/views/');

// set route
app.get('/', (req, res) => {
    res.render('index');
});

server.listen(port, () => {
    console.log("Listening on port " + port);
});

// Open socket
io.sockets.on("connection", function(socket) {

    socket.on("chat-message", function(message) {

        io.sockets.emit("chat-message", (message));

        // Chat-bot responses
        if (message == "Hello") {
            io.sockets.emit("chat-message", "Hello world!");

        } else if (message == "How are you?") {
            io.sockets.emit("chat-message", "Surprisingly ordinary . Thanks for asking!");
        } else if (message == "What's your name?") {
            io.sockets.emit("chat-message", "01000010 01101111 01100010. But you can call me Chat Bot. Pleasure to meet you human!");
        } else if (message == "What year is it?") {
            io.sockets.emit("chat-message", "In human years it is " + n + " if I've calculated correctly.");
        } else if (message == "Where do you live?") {
            io.sockets.emit("chat-message", "Here and there. Curently i live in your browser. I hope you don't mind.");
        } else {
            io.sockets.emit("chat-message", "Does not compute");
        }

    });
});