import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import Routes from '../components/Routes';
// const AppRoot = require('../components/AppRoot').default;

export default () => (req, res) => {
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
          <div id="react-root">${ReactDOMServer.renderToString(
            <StaticRouter location={req.url} context={{}}>
              <Routes />
            </StaticRouter>
          )}</div>
        </div>
        <script src="vendors-main-bundle.js"></script>
        <script src="main-bundle.js"></script>
      </body>
    </html>    
  `);
};
