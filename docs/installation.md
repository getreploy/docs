---
id: installation
title: Installation
---

This guide goes through the installation of the Reploy CLI on your machine and gets you started with the Reploy service. Currently, **we only support mac OSX**.

:::caution
Reploy is currently in the early access phase, you'll need to **[request access here](https://getreploy.com/)** before moving forward with the installation.
:::


## Installing the CLI

As detailed earlier, in order to install the CLI, a mac running **OSX is required**. If you do not have the brew package manager installed, you can install it [here](https://brew.sh/). 

```
brew install getreploy/reploy/reploy
```

And to verify the installation:

```
reploy help
```

## Authentication

Once Reploy has been installed and the service is up and running, the next step is authentication, as the CLI requires authentication before any commands can be executed.

To authenticate, just run:

```
reploy auth
```
The command line tool with then instruct you with further steps.
 

## Starting the Reploy service

Once you've successfully authenticated, you should now start the reploy daemon. In order to manage forwarded ports, watch files, etc. a *reploy daemon* running in the background is required.

```bash
brew services start reploy
```

And to verify the status of the service:

```bash
brew services list
```

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: '#000',
      borderRadius: '2px',
      paddingLeft: '2px',
      paddingRight: '2px',
      color: color,
    }}>
    {children}
  </span>
);

If the status is <Highlight color="#0ab78f">started</Highlight> (notice the color green), the service has started successfully, and you're good to go. 

However, if the status is <Highlight color="#fdcc16">started</Highlight> (notice the color yellow), the service is not working as expected. You'll need to see the log `tail -f /usr/local/var/log/reploy.log` for additional details. See common issues below.

### Common Issues

If you see anything related to the following in your `tail -f /usr/local/var/log/reploy.log`:

1. Authentication problems - you'll need to run `reploy auth` again to successfully authenticate before starting the daemon.

```bash
reploy auth

# once auth is successful, restart the service

brew services stop reploy
brew services start reploy
```

2. Port `8384` is already in use - you'll need to kill whatever is running on port `:8384`.

```bash
lsof -i :8384
# this will display the process (and the process ID) running on that port
# please KILL the process before moving forward: "kill -9 <Process_ID>"

# restart the reploy daemon
brew services stop reploy
brew services start reploy
```
