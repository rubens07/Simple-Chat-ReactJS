const shost = "192.168.0.1";
const sport = 8080;
const chost = "192.168.0.1";
const cport = 3000;


const koa = require('koa');
const http = require('http');
const socket = require("socket.io")

const app = new koa();
const server = http.createServer(app.callback());
const io = socket(server, {
  cors: {
    origin: `http://${chost}:${cport}`,
  }
});

io.on("connection", (socket) => {
  console.log("[IO] Connection => Server has a new connection.");
  socket.on("chat.message", (data) => {
    io.emit("chat.message", data);
  });
  socket.on("disconnect", () => {
    console.log("[SOCKET] Disconnect => A connection was disconnected.");
  });
});

server.listen(sport, shost, () => {
  console.log(`[HTTP] Listen => Server running at http://${shost}:${sport}`);
  console.log("[HTTP] Listen => Press Ctrl+C to stop.");
});
