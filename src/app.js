const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // console.log(req.url, req.method, req.headers);

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    const form =
    `<html>
      <head><title>Enter Massage</title></head>
      <body>
        <form action="/message" method="POST">
          <input type="text" name="message">
          <button type="submit">Send</button>
        </form>
      </body>
    </html>`;
    res.write(form);
    return res.end();
  }

  if (req.url === '/message' && req.method === 'POST') {
    const body = [];
    req.on('data', chunk => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFile('message.txt', message, err => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<h1>Hello from node.js server!</h1>');
  res.end();
});

server.listen(3000, () => console.log('Server started.'));