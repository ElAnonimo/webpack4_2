import express from 'express';
import expressStaticGzip from 'express-static-gzip';
import webpack from 'webpack';
import webpackHotServerMiddleware from 'webpack-hot-server-middleware';

import configDevClient from '../../config/webpack.dev-client';
import configDevServer from '../../config/webpack.dev-server';
import configProdClient from '../../config/webpack.prod-client';
import configProdServer from '../../config/webpack.prod-server';

const server = express();

const isProd = process.env.NODE_ENV === 'production';

if (!isProd) {
  const compiler = webpack([configDevClient, configDevServer]);

  const clientCompiler = compiler.compilers[0];
  const serverCompiler = compiler.compilers[1];

  const webpackDevMiddleware = require('webpack-dev-middleware')(
    compiler,
    configDevClient.devServer
  );

  const webpackHotMiddlware = require('webpack-hot-middleware')(
    clientCompiler,
    configDevClient.devServer
  );

  server.use(webpackDevMiddleware);
  server.use(webpackHotMiddlware);
  server.use(webpackHotServerMiddleware(compiler));     // webpackHotServerMiddleware takes the `name: 'server'` compilers
  console.log('Middleware enabled');
} else {
  webpack([configProdClient, configProdServer]).run((err, stats) => {
    // stats lists all the files (js, css) we use in configProdClient, configProdServer
    const clientStats = stats.toJson().children[0];     // configProdClient stats
    const render = require('../../build/prod-server-bundle.js').default;
    server.use(expressStaticGzip('dist', { enableBrotli: true }));
    server.use(render({ clientStats }));
  })
}

const port = process.env.PORT || 8080;
server.listen(port, console.log(`Server listening on http://localhost:${port} in ${process.env.NODE_ENV}`));
