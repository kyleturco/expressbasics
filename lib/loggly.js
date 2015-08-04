var loggly = require('loggly');

function logger(tag) {
  return loggly.createClient({
    token: '2b39c8a0-7e0f-4ab0-895b-a64c5d664a0f',
    subdomain: 'kyleturco',
    tags: ['NodeJS', tag],
    json: true
  });
}

module.exports = logger;
