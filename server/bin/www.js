const app = require('../../app');
const http = require('http');

let PORT = process.env.PORT || 3000;

http.createServer(app).listen(PORT);