const config = require('../../config/default');

module.exports =
  {
    web: {
      port: 5000,
    },
    database: {
      dbName: 'wedding_app',
      connection: {
        host: 'localhost',
        port: 27017,
      },
    },
  } || config;
