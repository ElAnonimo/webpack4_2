require('babel-runtime/regenerator');
require('babel-register');                                // allows for ES6 'import' syntax inside every module on the lines below
require('webpack-hot-middleware/client?reload=true');     // goes to client to set websocket connection
require('./index.html');
require('./nav.scss');
require('./app');
// require('./vue.app');

var a = async (args) => {
  const { a, b } = args;
  await console.log('Hello from ES6 arrow functions syntax.', a, b);
  console.log('Done.');
};

a({ a: 1, b: 2 });
