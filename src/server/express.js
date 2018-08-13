import express from 'express';
import React from 'react';
import expressStaticGzip from 'express-static-gzip';
import webpackHotServerMiddleware from 'webpack-hot-server-middleware';
import ReactDOMServer from 'react-dom/server';
import AppRoot from '../components/AppRoot';

import webpack from 'webpack';
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

  const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, configDevClient.devServer);

  const webpackHotMiddleware = require('webpack-hot-middleware')(clientCompiler, configDevClient.devServer);

  server.use(webpackDevMiddleware);
  server.use(webpackHotMiddleware);
  server.use(webpackHotServerMiddleware(compiler));   // webpackHotServerMiddleware will look for 'server' compiler within 'compiler' arg
} else {
  webpack([configProdClient, configProdServer]).run((err, stats) => {
    const render = require('../../build/prod-server-bundle.js').default;

    // const staticMiddleware = express.static('dist');
    // server.use(staticMiddleware);
    // const expressStaticGzip = require('express-static-gzip');
    server.use(expressStaticGzip('dist', { enableBrotli: true }));

    server.get('*', render());
  });
}

const port = process.env.PORT || 8080;

server.listen(port, console.log(`Server\'s listening on http://localhost:${port}`));
