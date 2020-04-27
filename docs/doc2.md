---
id: doc2
title: Getting started with Reploy
sidebar_label: Getting started
---
## Authentication

Once Reploy has been [installed and the service is up and running](doc1.md), the next step is to authenticate yourself. The CLI requires authentication before any commands can be executed.

This a token based auth from the login flow of the Reploy web app. To authenticate, just run:

```
reploy auth
```

## Setting up a project

First, check to see if the Reploy project has already been set up for your team. **You can do that by seeing if a `reploy.yml` file exists in your project's root directory.**

If not, set up a new project [as instructed here](doc3.md).


## Executing Commands

Once a Reploy project is set up, you can start running any arbitrary linux commands in any subdirectories (as specified in `reploy.yml`) prefixed by `reploy run`.

Here are a few examples:

To run a node app
```
cd frontend
reploy run npm install
reploy run npm start
```
To run a Golang service
```
cd backend
reploy run go run .
```

## Accessing the project

Once you run a command and have a service (like a web application) running, you'll need to access the service. You can find the IP address of the project by typing:

```
reploy status
```

Do not forget to add the port to the IP address you get from above e.g. `192.168.100.100:3000`. The best part about these links is that they are sharable and instantaneously update as you make changes!