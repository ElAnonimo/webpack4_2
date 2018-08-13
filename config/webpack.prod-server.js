const path = require('path');
const webpack = require('webpack');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  name: 'server',
  entry: './src/server/render.js',
  mode: 'production',
  output: {
    filename: 'prod-server-bundle.js',
    path: path.resolve(__dirname, '../build'),
    libraryTarget: "commonjs2"
  },
  target: 'node',
  externals: nodeExternals(),     // don't process node_modules with Webpack, use node modules with Node directly
  optimization: {
    splitChunks: {
      chunks: 'all',              // overridden by cacheGroups.chunks
      automaticNameDelimiter: "-",
      cacheGroups: {
        vendor: {
          name: 'vendor',
          chunks: 'initial',
          minChunks: 2
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.s?css$/,
        use: [
          // { loader: miniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.html$/,
        use: [
          // the job of file-loader and extract-loader is done by htmlWebpackPlugin
          /* {
            loader: 'file-loader',
            options: { name: '[name].html' }
          },
          {
            loader: 'extract-loader'    // don't put output file inside output.filename, place it to output.path on its own
          }, */
          {
            loader: 'html-loader',
            options: { attrs: ['img:src'] }
          }
        ]
      },
      {
        test: /\.jpg$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name]-[hash:8].[ext]',
              emitFile: false
            }
          }
        ]
      },
      {
        test: /\.md$/,
        // use: ['html-loader', 'markdown-loader']
        use: 'markdown-with-front-matter-loader'
      }
    ]
  },
  plugins: [
    new miniCssExtractPlugin({ name: '[name]-[contenthash].[ext]' }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
      // 'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV)
    })
  ]
};
