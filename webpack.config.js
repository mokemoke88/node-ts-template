/**
 * @file webpack configuration
 */

const path = require('path');
const nodeExternals = require('webpack-node-externals');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const devServer = {
  contentBase: path.resolve(__dirname, 'static'),
  port: 3000
};

const browser = {
  entry: {
    browser: [
      path.resolve(__dirname, 'src', 'sass', 'style.scss'),
      path.resolve(__dirname, 'src', 'index.ts')
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendor',
          chunks: 'initial',
          enforce: true,
        }
      }
    }
  },
  devtool: 'source-map',
  devServer: devServer,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader', 'ts-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          miniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoader: 2,
            }
          },
          'postcss-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
              removeComments: true,
              collapseWhitespace: true,
            }
          }
        ]
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    }
  },
  plugins: [
    new miniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css'
    })
  ]
}

module.exports = browser;
