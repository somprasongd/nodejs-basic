const http = require('http');

const server = http.createServer((req, res) => {
  res.write('<h1>Hello from node.js server!</h1>');
  res.end();
});

server.listen(3000, () => console.log('Server started.'));