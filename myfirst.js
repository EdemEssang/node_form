const http = require("http");

const requesthandler = require("./channel");


const server = http.createServer(requesthandler);



server.listen(1000);