# Deploy With Docker

## Create Dockerfile

```dockerfile
FROM node:10-alpine
# Define working directory
WORKDIR /node-app
# Install deps for production only
COPY ./package*.json ./
RUN npm install --production && \
  npm cache clean --force
COPY ./src ./src
# Set system environments
ENV NODE_ENV=production
ENV PORT=3000
# Expose ports (for orchestrators and dynamic reverse proxies)
EXPOSE ${PORT}
# Start the app
CMD ["npm", "start"]
```

## .dockerignore

```
.vscode/
node_modules/

.dockerignore
.eslintrc
.gitignore
Dockerfile
```

## Docker Compose

```yml
version: "3.1"

services:
  web:
    build: .
    environment:
      - PORT=80
    ports:
      - 80:80
```
