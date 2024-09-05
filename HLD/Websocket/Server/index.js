const http = require("http");
const WebSocketServer = require("websocket").server;

let connection = null;

// Create the HTTP server
const httpServer = http.createServer((req, res) => {
    console.log("Received a request");
});

// Create the WebSocket server
const websocket = new WebSocketServer({
    "httpServer": httpServer
});

// Handle WebSocket requests
websocket.on("request", request => {
    console.log("WebSocket connection requested");
    
    // Accept the connection from the client
    connection = request.accept(null, request.origin); // Accept all types of connections
    console.log("Connection accepted");

    // WebSocket connection event listeners
    connection.on("open", () => console.log("Connection opened"));
    
    connection.on("close", () => {
        console.log("Connection closed");
        connection = null; // Clean up the connection
    });
    
    connection.on("message", message => {
        console.log(`Received: ${message.utf8Data}`); // Access message content
    });

    // Start sending messages to the client every 5 seconds
    sendEvery5seconds();
});

// Function to send a message to the client every 5 seconds
function sendEvery5seconds() {
    if (connection && connection.connected) { // Ensure connection is still open
        connection.send("Hey client!");
        setTimeout(sendEvery5seconds, 5000);
    }
}

// Start the HTTP server and listen on port 8080
httpServer.listen(8080, () => console.log("Server is listening on port 8080"));
