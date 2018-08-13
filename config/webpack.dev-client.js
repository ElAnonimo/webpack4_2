const path = require('path');
const webpack = require('webpack');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  name: 'client',
  entry: {
    // main: ['babel-polyfill', './src/main.js']
    // main: ['core-js/fn/promise', './src/main.js']
    main: [
      'babel-runtime/regenerator',
      'webpack-hot-middleware/client?reload=true',
      './src/main.js'
    ]
  },
  mode: 'development',
  output: {
    filename: '[name]-bundle.js',
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  devServer: {
    contentBase: 'dist',
    overlay: true,
    stats: {
      colors: true
    },
    hot: true
  },
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',      // overridden by cacheGroups.chunks
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
          { loader: 'style-loader' },
          // { loader: miniCssExtractPlugin.loader },
          { loader: 'css-loader',
            options: {
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
    new webpack.HotModuleReplacementPlugin(),
    // new htmlWebpackPlugin({ template: './src/index.html' }),
    new BundleAnalyzerPlugin({
      generateStatsFile: true,
      openAnalyzer: false
    })
    // new VueLoaderPlugin()
  ]
};
