var socket;

function openSocket() {
  socket = new WebSocket("ws://demos.kaazing.com/echo");

  socket.onopen = function() {
    writeOutput("Connection opened");
  };

  socket.onerror = function(event) {
    writeOutput("Error establishing connection: " + event.data);
  };

  socket.onclose = function(event) {
    writeOutput("Connection closed. Reason: " + event.reason);
  };

  socket.onmessage = function(event) {
    writeOutput("Response type: " + event.type);
    writeOutput("Response data: " + event.data);
  };
}

function closeSocket() {
  if (socket)
    socket.close();
}

function sendMessageToSocket() {
  if (socket && socket.readyState === 1) {
    var message = document.getElementById("message").value;
    writeOutput("Sending message: " + message);
    socket.send(message);
  }
}

function writeOutput(line) {
  document.getElementById("output").innerHTML += line + "\n";
}
