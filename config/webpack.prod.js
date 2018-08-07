const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
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
  devtool: 'source-map',
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
          { loader: 'css-loader',
            options: {
              minimize: true,
              modules: false,
              // name is css file name, local is class name the applied css rule is from inside css file
              localIdentName: '[name]-[local]-[hash:base64:8]'
              /* getLocalIdent: (localName, localIdentName) => {
                const testStr = new String(localIdentName);
                if (testStr.includes('profile')) {
                  localName = 'profile';
                }

                return localName
              } */
            }
          },
          { loader: 'sass-loader'}
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
    new miniCssExtractPlugin({ name: '[name]-[contenthash].[ext]' }),
    new optimizeCssAssetsPlugin()
    // new VueLoaderPlugin()
  ]
};
