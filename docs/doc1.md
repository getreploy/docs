---
id: doc1
title: Installation
---

:::note
Reploy is currently in the early access phase, you'll need to [request access](https://getreploy.com/) before moving forward with the installation.
:::


This guide is meant to install the Reploy CLI on your machine and get you started with the Reploy service. Currently, we only support macOS.

## Installing the CLI

If you do not have the brew package manager installed, you can get it here - [https://brew.sh/](https://brew.sh/). 

```
brew install getreploy/reploy/reploy
```

Let us now verify if it installed correctly.

```
reploy help
```

## Starting the Reploy service
```
brew services start getreploy/reploy/reploy
```

Now, let us see the status of the service.
```
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

However, if the status is <Highlight color="#fdcc16">started</Highlight> (notice the color yellow), the service is not working as expected. You'll need to see the log `tail -f /usr/local/var/log/reploy.log` for additional details.