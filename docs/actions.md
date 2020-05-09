---
id: actions
title: Reploy Actions
---

## Introducing Actions
The best way to think about actions are as user-defined aliases for common commands used by you developers on your team.

## Structure

Actions are also defined in the `reploy.yml` config file and consists of commands to run in specified services.

Here's an outline followed by brief examples for reference:

```yaml
actions:
    action-name:
        commands:
            - run: <command-to-execute>
              service: <service-name>
```

## Example and use-cases

Use-case 1: Flush the redis keystore with a single reploy action. A similar setup could be to perform database migrations using scripts.
```yaml
actions:
    flush-redis:
        commands:
            - run: redis-cli --version
              service: redis
            - run: redis-cli FLUSHALL
              service: redis
```

Use-case 2: Easily start the frontend/backend of the project.

```yaml
    run-frontend:
        commands:
            - run: cd frontend && npm install
              service: frontend
            - run: cd frontend && npm start
              service: frontend
```

Use-case 3: Easily run your entire test suite. This can also include additional commands for setup and teardown.

```yaml
    run-backend-tests:
        commands:
            - run: cd backend && go test ./...
              service: backend
```

A [complete sample](sample-reploy.yml) can be found in the sample section. 


## Execution

```sh
reploy action <action-name>

# Here's an example
# reploy action flush-redis
```