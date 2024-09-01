import express from "express";
import { WebSocketServer, WebSocket } from "ws"; // Ensure WebSocket is imported
import http from "http";

// Create an Express app
const app = express();
const port = 3000;

// Create an HTTP server
const server = http.createServer(app);

// Create a WebSocket server attached to the HTTP server
const wss = new WebSocketServer({ server });
let count = 0; // Corrected the typo here

// Set up a WebSocket connection
wss.on("connection", (ws, req) => {
  count += 1;
  console.log("New client connected");
  console.log("User count:", count);
  const ip = req.socket.remoteAddress;
  console.log("ipadress", ip);

  // Send a welcome message to the new client
  ws.send("Server says: Hello from here!");

  // Handle incoming messages from the client
  ws.on("message1", (message1) => {
    console.log(`Received: ${message1}`);

    // Broadcast the message to all connected clients
    // wss.clients.forEach((client) => {
    //   if (client.readyState === WebSocket.OPEN) {
    //     client.send(`Broadcast: ${message}`);
    //   }
    // });
  });

  // Handle the disconnection
  ws.on("close", () => {
    count -= 1;
    console.log("Client disconnected");
    console.log("User count:", count);
  });
});

// Set up a basic Express route
app.get("/", (req, res) => {
  res.send("WebSocket server is running.");
});

// Start the server
server.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
