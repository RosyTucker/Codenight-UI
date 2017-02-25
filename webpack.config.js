const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin'); // Generate index.html

const appPath = suffix => path.resolve(__dirname, suffix);

const PATHS = {
  js: appPath('src/client/js'),
  font: appPath('src/client/font'),
  images: appPath('src/client/images'),
  jsEntry: appPath('src/client/js/App.jsx'),
  htmlTemplate: appPath('src/client/templates/index.ejs'),
  outputJsFolder: appPath('dist/client')
};

const babelLoader = {
  test: /.jsx?$/,
  loader: 'babel-loader',
  include: PATHS.js,
  query: {
    presets: ['es2015', 'react']
  }
};

const fontLoader = {
  test: /\.(eot|svg|ttf|woff|woff2)$/,
  loader: 'file?name=public/fonts/[name].[ext]'
};

const imageLoader = {
  test: /\.(jpg|png)$/,
  loader: 'file-loader',
  include: PATHS.images
};

module.exports = [
  {
    devtool: 'source-map',
    entry: [
      'babel-polyfill',
      PATHS.jsEntry
    ],
    output: {
      path: PATHS.outputJsFolder,
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      loaders: [babelLoader, fontLoader, imageLoader]
    }
  }
];
