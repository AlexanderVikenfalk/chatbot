let socket = io();
let bot;

//-----------------------------------------------------------------------------
// Emit chat message when enter key is pressed.
//-----------------------------------------------------------------------------
$("#chat-input").keydown(function(event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        if ($("#chat-input").val() !== "") {
            socket.emit("chat-message", $("#chat-input").val());
            $("#chat-input").val("");

        } else {
            socket.emit("chat-message", $("#chat-input").val());
            $("#chat-input").val("");
        }
    }
});

//---------------------------------------------
// Emit chat message when button is clikced.
//---------------------------------------------

$(".submit-button").click(function() {
    event.preventDefault();
    if ($("#chat-input").val() !== "") {
        socket.emit("chat-message", $("#chat-input").val());
        $("#chat-input").val("");

    } else {
        socket.emit("chat-message", $("#chat-input").val());
        $("#chat-input").val("");
    }
});

//-----------------------------------------------------------------------------
// Receive chat message from server.
//-----------------------------------------------------------------------------
socket.on("chat-message", function(message) {
    if (bot === true) {
        // $("#chat-container").addClass("bot");
        $("#chat-list").append("<li class='bot'>" +
            message + " 🤖</li>");
        bot = false;
    } else {
        // $("#chat-container").addClass("user");
        $("#chat-list").append("<li class ='user'>👱 " +
            message + "</li>");
        bot = true;
    }
});