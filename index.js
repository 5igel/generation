'use strict';

const Hapi = require('hapi');
const Path = require('path');
const Inert = require('inert');
const port = process.env.PORT || 3000;

// Create a server with a host and port
const server = new Hapi.Server({
  connections: {
    routes: {
      files: {
        relativeTo: Path.join(__dirname, 'dist'),
      },
    },
  },
});

console.log(Path.join(__dirname, 'dist'));
server.connection({port: port});

server.register(Inert, () => {});

server.route({
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: '.',
      redirectToSlash: true,
      index: true,
    },
  },
});
// Start the server
server.start((err) => {
  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri);
});
