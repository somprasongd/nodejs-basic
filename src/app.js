const path = require('path');
const express = require('express');
const morgan = require('morgan');
const todos = require('./routes/todos');
const app = express();
const port = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// parse application/json
app.use(express.json());
// logger
if (app.get('env') === 'development') {
  app.use(morgan('dev'));
}

app.use(express.static('public'));

// route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use('/todos', todos);

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});