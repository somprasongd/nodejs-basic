# Express

- Install: `npm install express --save`

## Create Server

```javascript
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("Hello Express!");
});
app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});
```

## Basic routing

```javascript
// route
app.get("/", (req, res) => {
  res.send("Hello Express!");
});
app.post("/", function(req, res) {
  res.send("Got a POST request");
});
app.put("/user", function(req, res) {
  res.send("Got a PUT request at /user");
});
app.delete("/user", function(req, res) {
  res.send("Got a DELETE request at /user");
});
```

## Path & Query Parameters

```javascript
// path parameters
app.get("/greeting/:name", (req, res) => {
  console.log(req.params);
  const { name } = req.params;
  res.send(`Hello ${name}`);
});
// query parameters
app.get("/greeting", (req, res) => {
  console.log(req.query);
  const { name } = req.query;
  res.send(`Hello ${name}`);
});
```

## Use body parser

```javascript
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// parse application/json
app.use(express.json());

app.post("/", function(req, res) {
  console.log(req.body);
  res.send("Got a POST request");
});
```

## Middleware

### Create logger

```javascript
// logger
app.use((req, res, next) => {
  const now = new Date().toString();
  const log = `${now}: ${req.method} ${req.url}`;
  console.log(log);
  next();
});
```

### Use 3rd party middleware

```javascript
const morgan = require("morgan");
if (app.get("env") === "development") {
  app.use(morgan("dev"));
}
```

## Router

- routes/todos.js

```javascript
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("handling GET all todos request...");
  res.send("<h1>This is todos page</h1>");
});

router.post("/", (req, res) => {
  console.log("handling POST request...");
  res.end();
});

router.get("/about", (req, res) => {
  console.log("handling GET all todos request...");
  res.send("<h1>This is todos about page</h1>");
});

module.exports = router;
```

- use in main app

```javascript
const todos = require("./routes/todos");

app.use("/todos", todos);
```

## Serving Static File

- create folder public

- create public/index.html

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <title>Home Page</title>
</head>

<body>
  <h1>This is Home page</h1>
</body>

</html>
```

- enable serving static file

```javascript
const path = require("path");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
```

## EJS

- install: `npm install ejs --save`
- set view engine

```javascript
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
```

- create ejs file views/index.ejs

```html
<body>
  <h1>Hello
    <%= name %>
  </h1>
  <h2>Your pets:</h2>
  <ul>
    <% for(pet of pets){ %>
    <li>
      <%= pet %>
    </li>
    <% } %>
  </ul>
</body>
```

- use ejs

```javascript
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
  res.render("index", {
    name: "Somprasong",
    pets: ["Stamp", "Snow"]
  });
});
```
