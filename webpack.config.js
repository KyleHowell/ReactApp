const Dashboard = require('webpack-dashboard/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

const main = {
  context: __dirname,
  target: 'web',
  entry: {
    main: './src/main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};

// configuration specific to the dev environment
const dev = {
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
    pathinfo: true
  },
  devtool: 'source-map',
  plugins: [
    new Dashboard({
      color: 'cyan'
    }),
    new webpack.EnvironmentPlugin(
      Object.assign({
        NODE_ENV: 'development'
      })
    )
  ],
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    disableHostCheck: true,
    overlay: true,
    stats: {
      hash: false,
      version: false,
      timings: true,
      assets: false,
      entrypoints: false,
      chunks: true,
      chunkModules: false,
      errorDetails: false,
      reasons: false,
      depth: false,
      usedExports: false,
      providedExports: false,
      colors: true,
      performance: true
    }
  }
};

// configuration specific to the prod environment
const prod = {
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'build')
  },
  devtool: 'source-map',
  plugins: [
    new webpack.EnvironmentPlugin(
      Object.assign({
        NODE_ENV: 'production'
      })
    ),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: true,
      comments: false,
      sourceMap: true
    })
  ]
};

module.exports = env => {
  let config;

  switch (env) {
    case 'prod': {
      config = merge(main, prod);
      break;
    }
    default: {
      config = merge(main, dev);
    }
  }

  return config;
};
