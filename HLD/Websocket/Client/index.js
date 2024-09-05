let socket = new WebSocket('ws://localhost:8080');

socket.onmessage = message=> console.log(message);

socket.send("message from client")

socket.close();