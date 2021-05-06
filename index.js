/*
 * Copyright 2016-2021 Imply Data, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function hostToLocation(host, defaultPort) {
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
}

exports.hostToLocation = hostToLocation;

exports.basicLocator = function(host, defaultPort) {
  var location = hostToLocation(host, defaultPort);
  return function() {
    return Promise.resolve(location)
  }
};
