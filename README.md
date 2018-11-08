# 3rd Party Module

## Create package.json

- `$ npm init -y`

- Install module

  - `npm install nodemon -g`
  - `npm install nodemon --save-dev`
  - `npm install express --save`

- Uninstall module

  - `npm uninstall nodemon -g`
  - `npm uninstall express --save`

- Edit scripts

```json
{
  "name": "nodejs-basic",
  "version": "1.0.0",
  "description": "",
  "main": "src/app.js",
  "scripts": {
    "start": "node src/app.js",
    "dev": "nodemon src/app.js"
  },
  "keywords": [],
  "author": "Somprasong Damyos",
  "license": "ISC",
  "dependencies": {
    "express": "^4.16.4",
    "morgan": "^1.9.1"
  },
  "devDependencies": {
    "nodemon": "^1.18.6"
  }
}
```
