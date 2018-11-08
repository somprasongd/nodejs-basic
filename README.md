# File/Folder Module

## File Module

- lib.js

```javascript
// lib.js
const add = (x, y) => x + y;

// module.exports = add;
// module.exports = {
//   add
// };
// module.exports.add = add;
exports.add = add;
```

- app.js

```javascript
// app.js
const { add } = require("./lib");

console.log(add(1, 2));
```

## Folder Module

- lib/index.js

```javascript
// lib/index.js
const add = (x, y) => x + y;

// module.exports = add;
// module.exports = {
//   add
// };
// module.exports.add = add;
exports.add = add;
```
