const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', function (req, res) {
  res.send('Got a POST request');
});

app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});

app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});

// path parameters
app.get('/greeting/:name', (req, res) => {
  console.log(req.params);
  const {name} = req.params;
  res.send(`Hello ${name}`);
});

// query parameters
app.get('/greeting', (req, res) => {
  console.log(req.query);
  const {name} = req.query;
  res.send(`Hello ${name}`);
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});