import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import Routes from '../components/Routes';
// const AppRoot = require('../components/AppRoot').default;
import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';
import { Provider } from 'react-redux';
import store from './store';

export default ({ clientStats }) => (req, res) => {
  /* const html = ReactDOMServer.renderToString(<div>Hello SSR with Webpack 4</div>);
  res.send(html); */

  const site = req.hostname.split('.')[0];
  const names = flushChunkNames().concat([`css/${site}-theme`]);

  /* const context = {
    site: req.hostname.split('.')[0]
  }; */
  const context = { site };

  // const names = flushChunkNames();

  const app = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <Routes />
      </StaticRouter>
    </Provider>
  );

  const { js, styles, cssHash } = flushChunks(clientStats, {
    // chunkNames: flushChunkNames()
    chunkNames: names
  });

  res.send(`
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Webpack 4</title>
        <!-- <link href="main.css" rel="stylesheet" /> -->
        ${styles}
      </head>
      <body>
        <div class="profile">
          <div id="react-root">
            ${app}
          </div>
        </div>
        <!-- <script src="vendors-main-bundle.js"></script> -->
        <!-- <script src="main-bundle.js"></script> -->
        ${js}
        ${cssHash}
      </body>
    </html>    
  `);
};
