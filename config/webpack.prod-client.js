const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const minifyPlugin = require('babel-minify-webpack-plugin');
const uglifyJsPlugin = require('uglifyjs-webpack-plugin');
const compressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const extractCssChunks = require('extract-css-chunks-webpack-plugin');
// const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  name: 'client',
  entry: {
    // main: ['babel-polyfill', './src/main.js']
    // main: ['core-js/fn/promise', './src/main.js']
    vendor: ['react', 'react-dom'],
    main: ['./src/main.js']
  },
  mode: 'production',
  output: {
    filename: '[name]-bundle.js',
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  /* optimization: {
    splitChunks: {
      // chunks: 'all',      // overridden by cacheGroups.chunks
      automaticNameDelimiter: "-",
      cacheGroups: {
        vendor: {
          name: 'vendor',
          chunks: 'initial',
          minChunks: 2
        }
      }
    }
  }, */
  optimization: {
    runtimeChunk: {
      name: "bootstrap"
    },
    splitChunks: {
      chunks: "initial",
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor"
        }
      }
    }
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
          // { loader: miniCssExtractPlugin.loader },
          { loader: extractCssChunks.loader },
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
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: 'file-loader',
            // options: { name: 'images/[name]-[hash:8].[ext]' }
            options: { name: 'images/[name].[ext]' }
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
    // new htmlWebpackPlugin({ template: './src/index.html' }),
    new optimizeCssAssetsPlugin(),
    new miniCssExtractPlugin({ name: '[name]-[contenthash].[ext]' }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
      // 'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV)
    }),
    // new minifyPlugin()
    new uglifyJsPlugin(),
    new compressionPlugin({ algorithm: 'gzip' }),
    new BrotliPlugin(),
    new extractCssChunks()
    // new VueLoaderPlugin()
  ]
};
