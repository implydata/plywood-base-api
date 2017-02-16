var Promise = require('any-promise');

exports.hostToLocation = function hostToLocation(host, defaultPort) {
  var hostnamePort = host.split(':');
  var hostname, port;
  if (hostnamePort.length > 1) {
    hostname = hostnamePort[0];
    port = parseInt(hostnamePort[1], 10);
  } else {
    hostname = hostnamePort[0];
    port = defaultPort;
  }
  return {
    hostname: hostname,
    port: port
  };
};

exports.basicLocator = function(host, defaultPort) {
  var location = hostToLocation(host, defaultPort);
  return function() {
    return Promise.resolve(location)
  }
};
