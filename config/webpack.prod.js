const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const minifyPlugin = require('babel-minify-webpack-plugin');
const uglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const { VueLoaderPlugin } = require('vue-loader');

module.exports = (env) => {
  return {
    entry: {
      // main: ['babel-polyfill', './src/main.js']
      // main: ['core-js/fn/promise', './src/main.js']
      main: ['./src/main.js']
    },
    mode: 'production',
    output: {
      filename: '[name]-bundle.js',
      path: path.resolve(__dirname, '../dist'),
      publicPath: '/'
    },
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js'
      }
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.s?css$/,
          use: [
            { loader: miniCssExtractPlugin.loader },
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
              options: { name: 'images/[name]-[hash:8].[ext]' }
            }
          ]
        }
      ]
    },
    plugins: [
      new htmlWebpackPlugin({ template: './src/index.html' }),
      new optimizeCssAssetsPlugin(),
      new miniCssExtractPlugin({ name: '[name]-[contenthash].[ext]' }),
      new webpack.DefinePlugin({
        // 'process.env.NODE_ENV': JSON.stringify('production')
        'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV)
      }),
      // new minifyPlugin()
      new uglifyJsPlugin()
      // new VueLoaderPlugin()
    ]
  }
};
