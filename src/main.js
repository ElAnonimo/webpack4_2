// require('babel-runtime/regenerator');                     // turns Promises to Generators. Moved to webpack.dev.js to entry
require('babel-register');                                   // allows for ES6 'import' syntax inside every module on the lines below
// require('webpack-hot-middleware/client?reload=true');     // goes to client to set websocket connection. Moved to webpack.dev.js to entry
require('./index.html');
require('./nav.scss');
require('./app');
// require('./vue.app');
require('react');

console.log('env is:', process.env.NODE_ENV);

var a = async (args) => {
  const { a, b } = args;
  await console.log('Hello from ES6 arrow functions syntax.', a, b);
  console.log('Done.');
};

a({ a: 1, b: 2 });
