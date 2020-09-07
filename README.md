# visual-intelligence-viz
Real-time visualization of data flow for the Visual Intelligence Platform (VIP) realized in Node.js. We use socket.io to stream real-time updates of agent state to clients and dagre to visualize the data flow graph of modules. 

![](public/img/viz.png)

# Requirements

Requires a recent version of Node.js to run. Can be installed using your packet manager of choice. For instance on Ubuntu this can be done via:

```
sudo apt install nodejs
```

If you are using nvm to install and switch to the latest version:

```
nvm install node
nvm use node
```

Tested on Node.js version 14.5.0. It may work on older versions but YMMV. I would not recommend using very old versions of Node.js anyway due to the security risks.

# Installation

Simply clone the repo and `cd` into the directory. Run the following command to install dependencies:

```
npm install
```

To start the node server:

```
$ node index.js
listening on *:3000
```

And that's it, the server is now listening on port 3000!

# Usage

The server is listening to changes in the `demo.json` file.
