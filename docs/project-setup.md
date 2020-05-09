---
id: project-setup
title: Overview of reploy.yml
---

## Get the Reploy project's ID
Before we define the `reploy.yml` file in the project's root directory, you'll will need to create a Reploy project online on the web app and get it's ID.

## Structure

A `reploy.yml` is a YAML file placed in the project's root directory and is used to configure a Reploy project (including its corresponding services and dependencies). To maintain familiarity, it is similar to docker compose in structure.

A [full sample is in the sample section](sample-reploy.yml) but here's a brief example for reference:

```yaml
id: <id-from-authentication>
services:
  my-service:
    relative-path: ./backend
    port: 1234
    port-forward: true
    image: dockerhub.com/image
    environment:
      KEY: 'val'
    secret:
      - SECRET_KEY
```
The fields for each `service` (`my-service` in the above example) are defined below:


| Name            | Value | Description                                                                                                                                                                                                                             |
|-----------------|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| service-name    | REQUIRED      | User defined name of the service e.g. `frontend`, `cache`, `database`.                                                                                                                                                                |
| image           | REQUIRED      | Link to the docker image.                                                                                                                                                                                                             |
| relative-path   | OPTIONAL      | Reploy commands executed in any sub-directories of this path will use this service.                                                                                                                                                   |
| port            | OPTIONAL      | Port that the service uses and needs to be exposed.                                                                                                                                                                                   |
| environment     | OPTIONAL      | A list of environment variables accessible by the service.                                                                                                                                                                            |
| secret          | OPTIONAL      | A list of secrets accessible by the service. the values of these secrets are defined in the Reploy web application.                                                                                                                                  |
| port-forward    | false         | Decides whether to port-forward to your local  machine.                                                                                                                                                                                |
| bypass-sync     | false         | Decouples syncing of file state with command execution i.e. decides whether to wait for file sync to finish before executing commands. Can be true for services like cache and databases which do not have an associated file state. |
| ignore-all-args | false         | When false, we pass default args to the docker container to keep it alive. However, to prevent overriding any args you might have specified, set it to true and we will not pass our default args.        |


