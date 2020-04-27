---
id: doc3
title: Set up a Project (reploy.yml)
---

## Get the Reploy project's ID
Before we define the `reploy.yml` file in the project's root directory, you'll will need to create a Reploy project online on the web app and get it's ID.

## Structure

A `reploy.yml` is a YAML file placed in the project's root directory and is used to configure a Reploy project (including its corresponding services and dependencies). To maintain familiarity, it is similar to docker compose in structure.

A full sample is in the next section but here's a brief example:
```yaml
id: yougetthisfromthewebapp
services:
  service-name: #name of the service
    relative-path: ./backend #this service will be used for all commands being executed in any sub-directory of `backend`
    port: 0000 # port that needs to be exposed
    port-forward: true # port-forwarding to your local machine
    image: dockerhub.com/image #link to the docker image
    environment: # environment variables
      KEY: 'val'
    secret:
      - SECRET_KEY # value stored in reploy's web app
```
The various aspects of a service are


| Name            | Default Value | Comments                                                                                                                                                                                                                             |
|-----------------|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| service-name    | REQUIRED      | User defined name of the service e.g. `frontend`, `cache`, `database`                                                                                                                                                                |
| image           | REQUIRED      | Link to the docker image                                                                                                                                                                                                             |
| relative-path   | OPTIONAL      | Reploy commands executed in any sub-directories of this path will use this service                                                                                                                                                   |
| port            | OPTIONAL      | Port that the service uses and needs to be exposed                                                                                                                                                                                   |
| environment     | OPTIONAL      | A list of environment variables accessible by the service                                                                                                                                                                            |
| secret          | OPTIONAL      | A list of secrets accessible by the service. the values of these secrets are defined in the web app                                                                                                                                  |
| port-forward    | false         | Decides whether to port-forward to your local machine                                                                                                                                                                                |
| bypass-sync     | false         | Decouples syncing of file state with command execution i.e. decides whether to wait for file sync to finish before executing commands. can be true for services like cache and databases which do not have an associated file state. |
| ignore-all-args | false         | When false, we pass default args to the docker container to keep it alive. however, if you'd like for us to not send any args to the docker container to prevent overriding any args you might have specified, turn this off.        |







## Sample reploy.yml
Consider a sample directory tree for a project
```
project_root # root directory of your project (home of the .git directory)
├── web-backend
│   └── main.go
├── web-frontend
│   └── package.json
│   └── main.js
├── ...
```
and its corresponding `reploy.yml` file
```yaml
id: yougetthisfromthewebapp
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
```