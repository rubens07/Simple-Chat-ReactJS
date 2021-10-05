const config = require('../src/properties/config.json');
const shost = config.SERVER_HOST || "localhost";
const sport = config.SERVER_PORT || 8080;
const chost = config.CLIENT_HOST || "localhost";
const cport = config.CLIENT_PORT || 3000;


const koa = require('koa');
const http = require('http');
// const socket = require('socket.io');
const socket = require("socket.io")

const app = new koa();
const server = http.createServer(app.callback());
const io = socket(server, {
  cors: {
      origin: `http://${chost}:${cport}`,
  }
});

server.listen(sport, shost, () => {
  console.log(`[HTTP] Listen => Server running at http://${shost}:${sport}`);
  console.log("[HTTP] Listen => Press Ctrl+C to stop.");
});
