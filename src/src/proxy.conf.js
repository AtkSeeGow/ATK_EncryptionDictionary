const Agent = require('agentkeepalive');

const setting = {

  secure: false,
  agent: new Agent({
    maxSockets: 100,
    keepAlive: true,
    maxFreeSockets: 10,
    keepAliveMsecs: 100000,
    timeout: 6000000,
    keepAliveTimeout: 90000
  })
};

module.exports = {
  '/Api': {
    target: "http://localhost:5000/",
    ...setting
  }
};
