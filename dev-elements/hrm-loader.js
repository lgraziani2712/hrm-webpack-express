const server = require('http').createServer();
let requestHandler = require('../src/main');

server.on('request', requestHandler);
// This must be set here or the server will crash with every change
server.listen(3000, () => {
  console.log('Server listening in port 3000!');
});

// check if HMR is enabled
if(module.hot) {
  // accept update of dependency
  module.hot.accept('../src/main', () => {
    // replace request handler of server
    server.removeListener('request', requestHandler);

    requestHandler = require('../src/main');

    server.on('request', requestHandler);
  });
}
