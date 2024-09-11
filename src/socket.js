// src/socket.js
import { io } from "socket.io-client";

export const socket = io("http://localhost:5000", {
  transports: ["websocket"],
  // Additional configuration options if needed
});
