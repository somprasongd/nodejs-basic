const http = require('http');

const handlerRequest = (req, res) => {
  res.write('<h1>Hello from node.js server!</h1>');
  res.end();
}

const server = http.createServer(handlerRequest);

server.listen(3000, () => console.log('Server started.'));