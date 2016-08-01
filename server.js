require('babel-register');

require(
  process.env.NODE_ENV === 'production' ? './server.prod.babel' : './server.dev.babel'
);
