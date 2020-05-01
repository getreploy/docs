---
id: sample-fullstack-app
title: Sample full-stack app
---

:::caution
Please follow the [installation](installation.md) and [authentication](getting-started.md) instructions before continuing.
:::

## Repository	

[https://github.com/getreploy/fullstack-sample/](https://github.com/getreploy/fullstack-sample/)

## Overview

This repo has three reploy 'services': a frontend react application in `/frontend`, a backend go application in `/backend` and a redis container.

At the top level directory, there is a `reploy.yml` file which describes the environment that will be run against. Feel free to read more about it [here](project-setup.md).

## No setup required

Clone and step into the directory
```
git clone github.com/getreploy/fullstack-sample
cd fullstack-sample
```

That's it! You can now start executing commands.

## Executing Commands

As a Reploy user, you can run any arbitrary linux command prefixed by Reploy run (e.g. `reploy run <command>`). We've detailed the steps for getting started with both the frontend and backend apps below.

#### Backend

Step into the `backend` folder and start go app:
```
cd backend
reploy run go run .
```

#### Frontend

Install requirements in the `frontend` folder and start the react app
```
cd frontend
reploy run npm install
reploy run npm start
```

## Accessing the project

To access the web app, run

```
reploy status
```

and head to `IP_Address:3000` to access the app. You can now update code and view changes instantaneously through this link. Feel free to share it around as well!

You can also access the app at `localhost:3000` since `port-forward: true` is in the `reploy.yml` config file for all services. 
