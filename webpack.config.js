const path = require('path');
module.exports = {
  entry:  './src',
  output: {
    path: path.resolve('dist'),
      filename: 'bundle.js',
    },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: 'babel-loader',
        include: __dirname + '/src',
		exclude: /node_modules/,
            query: {
              presets: 'react'
            }
      },
      {
        test: /\.css/,
        loaders: ['style', 'css'],
        include: __dirname + '/src'
      }
    ],
  }
};


