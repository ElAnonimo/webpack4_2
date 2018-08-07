import express from 'express';

const server = express();

const isProd = process.env.NODE_ENV === 'production';

if (!isProd) {
  const webpack = require('webpack');
  const config = require('../../config/webpack.dev');
  const compiler = webpack(config);

  const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, config.devServer);

  const webpackHotMiddleware = require('webpack-hot-middleware')(compiler);

  server.use(webpackDevMiddleware);
  server.use(webpackHotMiddleware);
}

const staticMiddleware = express.static('dist');
server.use(staticMiddleware);

const port = process.env.PORT || 8080;

server.listen(port, console.log(`Server\'s listening on http://localhost:${port}.`));
