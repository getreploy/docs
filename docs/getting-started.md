---
id: getting-started
title: Getting started with Reploy
sidebar_label: Getting started
---
## Authentication

Once Reploy has been [installed and the service is up and running](installation.md), the next step is authentication, as the CLI requires authentication before any commands can be executed.

To authenticate, from your mac, just run:

```
reploy auth
```
The command line tool with then instruct you with further steps.



## Setting up a project

Depending on what your situation looks like, there are a few options for getting started with a Reploy project:
- If a Reploy project has already been set up for your team (i.e if a `reploy.yml` file exists in your project's root directory), you should be good to go. Move on to the following section.
- If you don't have a Reploy project setup, and you want to get a quick taste of what Reploy is like, use our fullstack sample app here - [https://github.com/getreploy/fullstack-sample](https://github.com/getreploy/fullstack-sample)
- If you'd like to setup your own project, you can do that [here](project-setup).

## Executing Commands

Once a Reploy project is set up, you can start running arbitrary linux commands in any subdirectories (as specified in `reploy.yml`) prefixed by `reploy run`.

Here are a few examples:


```bash
reploy run ls

# Sample commands

# To run a node app
# reploy run npm install
# reploy run npm start

# To run a Golang service
# reploy run go run .
```

## Accessing the project

Once you run a command and have a service (like a web application) running, you'll need to access the service. You can find the IP address of the project by typing:

```
reploy status
```

Do not forget to add the port to the IP address you get from above e.g. `192.168.100.100:3000`. The best part about these links is that they are sharable and instantaneously update as you make changes!

If `port-forward: true` is set in your `reploy.yml`, you can also access services at `localhost:<PORT>`. In this case, it'll be `localhost:3000`.
