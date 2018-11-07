const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// parse application/json
app.use(express.json());
// logger
app.use((req, res, next) => {
	const now = new Date().toString();
	const log = `${now}: ${req.method} ${req.url}`;
	console.log(log);
	next();
});

// route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/message', function (req, res) {
  console.log(req.body);
  res.send('Got a POST request');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});