import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import AppRoot from '../components/AppRoot';

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

// const staticMiddleware = express.static('dist');
// server.use(staticMiddleware);
const expressStaticGzip = require('express-static-gzip');
server.use(expressStaticGzip('dist', { enableBrotli: true }));

server.get('*', (req, res) => {
  /* const html = ReactDOMServer.renderToString(<div>Hello SSR with Webpack 4</div>);
  res.send(html); */

  res.send(`
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Webpack 4</title>
        <link href="main.css" rel="stylesheet" />
      </head>
      <body>
        <div class="profile">
          <div id="react-root">${ReactDOMServer.renderToString(<AppRoot />)}</div>
        </div>
        <script src="vendors-main-bundle.js"></script>
        <script src="main-bundle.js"></script>
      </body>
    </html>    
  `);
});

const port = process.env.PORT || 8080;

server.listen(port, console.log(`Server\'s listening on http://localhost:${port}`));
