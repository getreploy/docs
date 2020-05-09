---
id: sample-reploy.yml
title: Sample reploy.yml
---

## Sample reploy.yml

For reference, here's what the `reploy.yml` file for our repository looks like:

### Directory Structure
<br/>

```
project_root # root directory of your project (home of the .git directory)
├── web-backend
│   └── main.go
├── web-frontend
│   └── package.json
│   └── main.js
├── ...
```

### Project File Structure
<br/>

```yaml
id: <*id from web authentication*>

services:
  web-backend:
    relative-path: ./web-backend
    port: 8080
    port-forward: true
    image: gcr.io/himank-jay/polyglott-go:v1
    environment:
      PSQL_PASSWORD: 'postgres'
      PSQL_USER: 'default'
      PSQL_HOST: '0.0.0.0'
  database:
    port: 5432
    port-forward: true
    bypass-sync: true
    ignore-all-args: true
    image: gcr.io/himank-jay/postgres:v1
    environment:
      POSTGRES_PASSWORD: 'postgres'
      POSTGRES_USER: 'default'
  cache:
    port: 6379
    port-forward: true
    bypass-sync: true
    ignore-all-args: true
    image: gcr.io/himank-jay/redis:v1
  web-frontend:
    port: 3000
    port-forward: true
    relative-path: ./web-frontend
    image: gcr.io/himank-jay/polyglott-nodejs:v1
    environment:
      CHOKIDAR_USEPOLLING: true
    secrets:
      - REACT_APP_FIREBASE_API_KEY
      - REACT_APP_FIREBASE_AUTH_DOMAIN
      - REACT_APP_FIREBASE_DATABASE_URL
      - REACT_APP_BACKEND_URL

actions:
    run-frontend:
        commands:
            - run: cd web-frontend && npm install
              service: web-frontend
            - run: cd web-frontend && npm start
              service: web-frontend
    run-backend:
        commands:
            - run: cd web-backend && go run .
              service: web-backend
    run-backend-tests:
        commands:
            - run: cd web-backend && go test ./...
              service: web-backend
    flush-redis:
        commands:
            - run: redis-cli --version
              service: redis
            - run: redis-cli FLUSHALL
              service: redis              
```