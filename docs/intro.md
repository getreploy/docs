---
id: intro
title: Introduction
---

## What is Reploy?
Reploy configures and manages remote resources for developer environments without compromising unique local workflows. This allows developers to move faster on building product rather than fighting fires fixing their dev environments.

Reploy provides consistency across developers and their environments (i.e. no more "...but it works on my machine"), moves code execution to the cloud, and yields a bunch of additional advantages like easier collaboration and seamless onboarding among others. The best part about this is that it takes a couple of seconds to get set up, and it does not interfere with any of your local existing workflows that you already love (IDEs, Editors, CI/CD workflows, dev tools, etc.).

## Why use Reploy?

Regardless of the size of your organization, Reploy will prove to be immensely helpful:

- **Compute when you need it**
    - Scale compute based on needs of the service/app running in your environment
    - Developers are no longer constrained by local resources on their machine

- **Boosted dev velocity**
    - Allows developers to simulate production in their dev environments
    - Catch bugs sooner and ship code faster

- **Consistency across developers**
    - Set up environments just once, not once per developer
    - Any change in environments gets reflected across the entire team
    - Prevents the problem of "...but it works on my machine"

- **Onboarding takes seconds**
    - New developers get set-up and start building in seconds, not weeks
    - Do not need to deal with dependency, versioning or config issues
    - No more relying on extensive documentation just to get an initial build running

- **Collaboration like never before**
    - Your dev environment is instantaneously shareable with co-workers
    - No more waiting to deploy to staging before someone can even see changes
    - Allows cross-collaboration among developers working on a feature together

- **Frictionless to adopt**
    - Use your favorite local tools and workflows that you love
    - No need to write code in the browser

- **Source controlled environments**
    - Represent your dev environment as code
    - Keep track of history and changes of environments with git

## Comparison with other tools

We've studied a wide variety of existing tools out there and have some insight to offer on what makes Reploy different.

### Browser based IDEs (repl.it, Coder, Cloud9)

Browser based tools are useful for quickly making minor edits on new repositories or to offer quick feedback, and they are super easy to set up and get started with everything in one place. However, such tools do not tend to work well for sustained usage for your primary codebase since they interfere with your existing local workflows and tools and require a major shift in the way you contribute code. Compared to running on a local environment, adopting such browser tools comes at a high cost because they force developers to write code in a constricted environment and restrict ability to use tools and scripts developers know and love.

### Docker and docker-compose 

An extremely popular way that developers currently isolate environments are via containers that run locally. Additionally, they use docker-compose to manage multiple services across multiple containers. We are big proponents of containerization ourselves (and it forms a core part of Reploy) but we believe that managing your own containers locally is not ideal for multiple reasons. First, running multiple containers locally is extremely resource heavy and consumes most (if not all) local resources forcing developers (in some cases) to write code around that constraint. Furthermore, managing your own containers is painful and involves dealing with secrets, environment variables and any additional debugging needed to get the environment correctly configured.

TLDR; we believe containers are a part of the solution but not the complete solution by itself.

## Early Access

We're currently in an early access mode and you can request access at [https://getreploy.com/](https://getreploy.com/).

